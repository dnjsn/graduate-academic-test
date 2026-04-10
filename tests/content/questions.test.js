import test from 'node:test';
import assert from 'node:assert/strict';

import { baseQuestions, hiddenQuestions } from '../../src/content/questions.js';
import { personas, hiddenPersonas } from '../../src/content/personas.js';
import { journals } from '../../src/content/journals.js';

test('content registry has the planned counts', () => {
  assert.equal(baseQuestions.length, 24);
  assert.equal(hiddenQuestions.length, 2);
  assert.equal(personas.length, 12);
  assert.equal(hiddenPersonas.length, 3);
  assert.ok(journals['Rubbish Communications']);
});

test('each question has three answer options with scoring effects', () => {
  for (const question of baseQuestions) {
    assert.equal(question.options.length, 3);
    for (const option of question.options) {
      assert.ok(option.id);
      assert.ok(option.label);
      assert.ok(Object.keys(option.effects).length > 0);
    }
  }
});
