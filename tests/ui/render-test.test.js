import test from 'node:test';
import assert from 'node:assert/strict';

import { renderTestScreen } from '../../src/ui/render-test.js';

test('renderTestScreen shows progress and question labels', () => {
  const html = renderTestScreen({
    progress: { current: 2, total: 26 },
    questions: [
      {
        id: 'q01',
        prompt: '结果不显著时，你第一反应更像：',
        options: [{ id: 'A', label: '接受现实' }],
      },
    ],
  });

  assert.match(html, /2 \/ 26/);
  assert.match(html, /研究生学术命运预审问卷/);
  assert.match(html, /结果不显著时/);
  assert.match(html, /接受现实/);
  assert.match(html, /所有题都答完了，现在可以把命运移交编辑部。|答完整套题，系统才肯出具流放意见。/);
  assert.match(html, /查看鉴定书/);
});
