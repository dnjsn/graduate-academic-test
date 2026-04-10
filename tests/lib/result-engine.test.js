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
  assert.ok(result.reviewSnippet);
  assert.ok(result.systemNote);
});
