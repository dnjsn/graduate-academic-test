import test from 'node:test';
import assert from 'node:assert/strict';

import { renderIntroScreen } from '../../src/ui/render-intro.js';

test('renderIntroScreen uses the pseudo-official declaration voice', () => {
  const html = renderIntroScreen();

  assert.match(html, /国家研究生学术命运测量中心（未备案）/);
  assert.match(html, /研究生学术人格暨投稿宿命鉴定/);
  assert.match(html, /本系统不评估你的性格，只鉴定你会以什么姿势把论文拖到截止日前 23:57/);
  assert.match(html, /提交精神样本/);
});
