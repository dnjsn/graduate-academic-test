import test from 'node:test';
import assert from 'node:assert/strict';

import { journals } from '../../src/content/journals.js';
import { hiddenPersonas, personas } from '../../src/content/personas.js';
import { buildResultViewModel } from '../../src/lib/result-engine.js';

test('buildResultViewModel overrides ranked persona when a hidden persona matches', () => {
  const result = buildResultViewModel({
    answers: { 'hidden-authorship-followup': 'C' },
    profile: {
      topicInflation: 1,
      rhetoricStitching: 2,
      significanceFixation: 1,
      advisorStress: 1,
      submissionFatalism: 2,
      laborBurden: 6,
      shortcutSmell: 0,
    },
    rankedPersonas: [personas.find((persona) => persona.id === 'almost-significant')],
    hiddenPersonas,
    journals,
  });

  assert.equal(result.persona.id, 'co-first-is-negotiable');
  assert.equal(result.journal.title, 'Rubbish Communications');
});

test('buildResultViewModel uses the ranked persona when no hidden persona matches', () => {
  const result = buildResultViewModel({
    answers: { q22: 'A' },
    profile: {
      topicInflation: 1,
      rhetoricStitching: 1,
      significanceFixation: 9,
      advisorStress: 3,
      submissionFatalism: 4,
      laborBurden: 1,
      shortcutSmell: 1,
    },
    rankedPersonas: [personas.find((persona) => persona.id === 'almost-significant')],
    hiddenPersonas,
    journals,
  });

  assert.equal(result.persona.id, 'almost-significant');
  assert.equal(result.journal.title, 'Rubbish Methods');
  assert.match(result.decision, /Revision|Editor|Reject|Priority/);
  assert.equal(result.graduationOutcome.title, '建议再做一轮实验');
  assert.ok(result.reviewSnippet);
  assert.ok(result.systemNote);
});

test('buildResultViewModel can branch away from default with-editor outcomes', () => {
  const result = buildResultViewModel({
    answers: { q22: 'B' },
    profile: {
      topicInflation: 2,
      rhetoricStitching: 9,
      significanceFixation: 5,
      advisorStress: 4,
      submissionFatalism: 4,
      laborBurden: 3,
      shortcutSmell: 2,
    },
    rankedPersonas: [personas.find((persona) => persona.id === 'discussion-fills-the-gap')],
    hiddenPersonas,
    journals,
  });

  assert.equal(result.persona.id, 'discussion-fills-the-gap');
  assert.equal(result.decision, 'Minor Revision');
});
