import test from 'node:test';
import assert from 'node:assert/strict';

import { baseQuestions, hiddenQuestions } from '../../src/content/questions.js';
import { journals } from '../../src/content/journals.js';
import { hiddenPersonas, personas } from '../../src/content/personas.js';
import { buildResultViewModel } from '../../src/lib/result-engine.js';
import { rankPersonas, scoreAnswers } from '../../src/lib/scoring.js';
import { getVisibleQuestions } from '../../src/lib/visible-questions.js';

function createRng(seed = 20260410) {
  let state = seed >>> 0;

  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 0x100000000;
  };
}

function pickOption(question, rng) {
  return question.options[Math.floor(rng() * question.options.length)].id;
}

function getShareMap(map, total) {
  return new Map([...map.entries()].map(([key, value]) => [key, value / total]));
}

test('distribution stays reasonably balanced across personas, journals, and outcomes', () => {
  const rng = createRng();
  const runs = 12000;
  const personaCounts = new Map();
  const journalCounts = new Map();
  const decisionCounts = new Map();
  const graduationCounts = new Map();

  for (let index = 0; index < runs; index += 1) {
    const answers = {};

    for (const question of baseQuestions) {
      answers[question.id] = pickOption(question, rng);
    }

    if (answers['hidden-authorship-trigger'] === 'C') {
      answers['hidden-authorship-followup'] = pickOption(hiddenQuestions[0], rng);
    }

    if (answers['hidden-clinical-trigger'] === 'C') {
      answers['hidden-clinical-followup'] = pickOption(hiddenQuestions[1], rng);
    }

    const visibleQuestions = getVisibleQuestions({
      orderedQuestions: baseQuestions,
      hiddenQuestions,
      answers,
    });
    const profile = scoreAnswers({
      questions: visibleQuestions,
      answers,
    });
    const rankedPersonas = rankPersonas({
      profile,
      personas,
    });
    const result = buildResultViewModel({
      answers,
      profile,
      rankedPersonas,
      hiddenPersonas,
      journals,
    });

    personaCounts.set(result.persona.id, (personaCounts.get(result.persona.id) || 0) + 1);
    journalCounts.set(result.journal.title, (journalCounts.get(result.journal.title) || 0) + 1);
    decisionCounts.set(result.decision, (decisionCounts.get(result.decision) || 0) + 1);
    graduationCounts.set(
      result.graduationOutcome.title,
      (graduationCounts.get(result.graduationOutcome.title) || 0) + 1,
    );
  }

  const personaShares = getShareMap(personaCounts, runs);
  const journalShares = getShareMap(journalCounts, runs);
  const decisionShares = getShareMap(decisionCounts, runs);
  const graduationShares = getShareMap(graduationCounts, runs);

  const maxPersonaShare = Math.max(...personaShares.values());
  const maxJournalShare = Math.max(...journalShares.values());
  const minJournalShare = Math.min(...journalShares.values());
  const strongPersonaCount = [...personaShares.values()].filter((share) => share >= 0.009).length;

  assert.ok(maxPersonaShare < 0.2, `largest persona share too high: ${maxPersonaShare}`);
  assert.ok(maxJournalShare < 0.2, `largest journal share too high: ${maxJournalShare}`);
  assert.ok(minJournalShare > 0.015, `smallest journal share too low: ${minJournalShare}`);
  assert.ok(
    strongPersonaCount >= 14,
    `too few personas appear with meaningful frequency: ${strongPersonaCount}`,
  );
  assert.ok(
    (decisionShares.get('Priority Handling') || 0) < 0.15,
    `priority handling dominates too often: ${decisionShares.get('Priority Handling') || 0}`,
  );
  assert.ok(
    (graduationShares.get('有缘毕业') || 0) < 0.25,
    `有缘毕业 appears too often: ${graduationShares.get('有缘毕业') || 0}`,
  );
  assert.ok(
    (graduationShares.get('顺利毕业') || 0) >= 0.4 &&
      (graduationShares.get('顺利毕业') || 0) <= 0.46,
    `顺利毕业 share out of target range: ${graduationShares.get('顺利毕业') || 0}`,
  );
});
