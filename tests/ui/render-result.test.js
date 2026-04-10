import test from 'node:test';
import assert from 'node:assert/strict';

import { renderResultScreen } from '../../src/ui/render-result.js';

test('renderResultScreen prints persona, journal, and editorial decision', () => {
  const html = renderResultScreen({
    persona: {
      title: '差一点就显著',
      subtitle: '结果接近显著',
      blurb: '你真的很想让这件事显著。',
    },
    journal: { title: 'Rubbish Methods', notes: '统计学执念和流程包装的归宿。' },
    decision: 'Major Revision',
    reviewSnippet: '结果趋势可见，但目前仍主要依赖作者的信念支撑。',
    systemNote: '请停止在讨论部分反复安慰自己。',
    profile: { significanceFixation: 9, rhetoricStitching: 5 },
  });

  assert.match(html, /差一点就显著/);
  assert.match(html, /Rubbish Methods/);
  assert.match(html, /Major Revision/);
  assert.match(html, /显著性执念/);
});
