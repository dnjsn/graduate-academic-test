import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('styles use the more absurd pseudo-official palette', () => {
  const css = readFileSync(
    '/Users/wendong/Desktop/graduate-academic-test/styles.css',
    'utf8',
  );

  assert.match(css, /--paper:\s*#efe2a8;/);
  assert.match(css, /--accent:\s*#c61f3a;/);
  assert.match(css, /--glitch:\s*#178f87;/);
  assert.match(css, /rgba\(23,\s*143,\s*135,\s*0\.18\)/);
});
