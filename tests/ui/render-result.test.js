import test from 'node:test';
import assert from 'node:assert/strict';

import { renderResultScreen } from '../../src/ui/render-result.js';

test('renderResultScreen prints persona, journal, and editorial decision', () => {
  const html = renderResultScreen({
    persona: {
      title: '边缘显著性信徒',
      subtitle: '趋势已现，现实未批',
      blurb: '你真的很想让这件事显著。',
    },
    journal: { title: 'Rubbish Methods', notes: '统计学执念和流程包装的归宿。' },
    decision: 'Major Revision',
    graduationOutcome: {
      title: '延毕观察',
      note: '系统检测到你和“再做一轮实验”之间只有导师一句话的距离。',
    },
    reviewSnippet: '结果趋势可见，但目前仍主要依赖作者的信念支撑。',
    systemNote: '请停止在讨论部分反复安慰自己。',
    profile: { significanceFixation: 9, rhetoricStitching: 5 },
  });

  assert.match(html, /建议流放地/);
  assert.match(html, /学术病理分型/);
  assert.match(html, /边缘显著性信徒/);
  assert.match(html, /Rubbish Methods/);
  assert.match(html, /Major Revision/);
  assert.match(html, /编辑部口头超度/);
  assert.match(html, /系统冷读结果/);
  assert.match(html, /延毕观察/);
  assert.match(html, /异常指标面板/);
  assert.match(html, /显著性执念/);
});
