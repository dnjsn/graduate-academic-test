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

test('question copy includes the newer graduate-school meme lines', () => {
  const prompts = baseQuestions.map((question) => question.prompt);
  const labels = baseQuestions.flatMap((question) => question.options.map((option) => option.label));

  assert.equal(baseQuestions[0].prompt, '导师说：“这个方向挺新，你可以深入做一下。”你更可能：');
  assert.deepEqual(
    baseQuestions[0].options.map((option) => option.label),
    [
      '先把它砍成一个我能按时毕业的小题，不然“深入”最后一般是我先没了。',
      '先去翻文献，看看前人到底是做出来了，还是死得比较体面。',
      '正好，我来顺手补上本领域悬而未决的世纪空白。',
    ],
  );
  assert.equal(baseQuestions[1].prompt, '下面哪句更像你的学术信条：');
  assert.ok(prompts.includes('导师在群里说“明天每个人讲讲最近进展”，你更像：'));
  assert.ok(prompts.includes('看到导师发来“来我办公室一下”时，你的第一反应是：'));
  assert.ok(prompts.includes('如果导师问“你这个现在做到哪一步了”，你更可能：'));
  assert.ok(prompts.includes('当课题推进不顺时，你会不会冒出“先去公共库看看”的念头：'));
  assert.ok(labels.includes('原始结果只是素材，真正发言的是叙事系统。'));
  assert.ok(labels.includes('微信里没有标点，但每个字都带着杀气。'));
  assert.ok(labels.includes('用一个完整叙事，把停滞阶段包装成路径探索。'));
  assert.ok(labels.includes('C. 先别急着绝望，GEO 和 TCGA 未必没有我的明天。'.replace(/^C\. /, '')));
});
