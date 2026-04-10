import test from 'node:test';
import assert from 'node:assert/strict';

import { renderShell } from '../../src/ui/app-shell.js';

test('renderShell returns intro, test, and result screens', () => {
  const html = renderShell();

  assert.match(html, /data-screen="intro"/);
  assert.match(html, /data-screen="test"/);
  assert.match(html, /data-screen="result"/);
});
