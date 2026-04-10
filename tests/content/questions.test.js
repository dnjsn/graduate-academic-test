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

  assert.equal(baseQuestions[0].prompt, '刚读研那阵，你对自己的期待更像：');
  assert.equal(baseQuestions[1].prompt, '研究生上课上到后来，你觉得自己真正学会的是：');
  assert.ok(prompts.includes('导师说“这个方向挺新，你可以深入做一下”时，你更可能：'));
  assert.ok(prompts.includes('组会前一晚，你最真实的工作重点通常是：'));
  assert.ok(prompts.includes('引言实在写不下去时，你最可能：'));
  assert.ok(labels.includes('求求了师姐你可以延毕吗'));
  assert.ok(labels.includes('你走了我怎么办'));
  assert.ok(labels.includes('老板又在哪个公众号看到的'));
  assert.ok(labels.includes('再玩会手机，等会再说'));
  assert.ok(labels.includes('GPT启动啊'));
  assert.ok(labels.includes('不要让数据影响到你的结果'));
  assert.ok(labels.includes('创新性要足你投这个刊？CNS了都'));
  assert.ok(labels.includes('完了课题被别人发了'));
  assert.ok(labels.includes('AI率过不过'));
  assert.ok(!prompts.includes('听到“先做个系统综述吧”时，你更容易相信：'));
  assert.ok(!prompts.includes('课题推进不顺时，你最不方便承认但最容易想到的是：'));
});
