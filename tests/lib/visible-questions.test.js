import test from 'node:test';
import assert from 'node:assert/strict';

import { hiddenQuestions } from '../../src/content/questions.js';
import { getVisibleQuestions } from '../../src/lib/visible-questions.js';

test('authorship trigger inserts the authorship hidden question', () => {
  const visible = getVisibleQuestions({
    orderedQuestions: [
      { id: 'q01' },
      { id: 'hidden-authorship-trigger' },
      { id: 'q02' },
    ],
    hiddenQuestions,
    answers: { 'hidden-authorship-trigger': 'C' },
  });

  assert.deepEqual(
    visible.map((item) => item.id),
    ['q01', 'hidden-authorship-trigger', 'hidden-authorship-followup', 'q02'],
  );
});

test('clinical trigger inserts the defense hidden question', () => {
  const visible = getVisibleQuestions({
    orderedQuestions: [
      { id: 'q01' },
      { id: 'hidden-clinical-trigger' },
      { id: 'q02' },
    ],
    hiddenQuestions,
    answers: { 'hidden-clinical-trigger': 'C' },
  });

  assert.deepEqual(
    visible.map((item) => item.id),
    ['q01', 'hidden-clinical-trigger', 'hidden-clinical-followup', 'q02'],
  );
});
