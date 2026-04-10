export function renderShell({
  activeScreen = 'intro',
  introContent = '',
  testContent = '',
  resultContent = '',
} = {}) {
  return `
    <section data-screen="intro" data-active="${activeScreen === 'intro'}">${introContent}</section>
    <section data-screen="test" data-active="${activeScreen === 'test'}">${testContent}</section>
    <section data-screen="result" data-active="${activeScreen === 'result'}">${resultContent}</section>
  `;
}
