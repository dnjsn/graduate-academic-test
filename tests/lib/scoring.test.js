import test from 'node:test';
import assert from 'node:assert/strict';

import { rankPersonas, scoreAnswers } from '../../src/lib/scoring.js';

test('scoreAnswers aggregates dimension totals from option effects', () => {
  const scored = scoreAnswers({
    questions: [
      {
        id: 'q01',
        options: [
          { id: 'A', effects: { significanceFixation: 0, rhetoricStitching: 1 } },
          { id: 'C', effects: { significanceFixation: 2, rhetoricStitching: 1 } },
        ],
      },
    ],
    answers: { q01: 'C' },
  });

  assert.equal(scored.significanceFixation, 2);
  assert.equal(scored.rhetoricStitching, 1);
});

test('rankPersonas returns nearest persona first', () => {
  const ranked = rankPersonas({
    profile: { topicInflation: 4, rhetoricStitching: 1, significanceFixation: 0 },
    personas: [
      { id: 'large-topic', vector: { topicInflation: 4, rhetoricStitching: 1, significanceFixation: 0 } },
      { id: 'significance', vector: { topicInflation: 0, rhetoricStitching: 0, significanceFixation: 4 } },
    ],
  });

  assert.equal(ranked[0].id, 'large-topic');
});
