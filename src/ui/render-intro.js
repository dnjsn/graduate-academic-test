export function renderIntroScreen() {
  return `
    <div class="intro-card">
      <p class="eyebrow">Graduate Academic Personality Lab</p>
      <h1>研究生学术人格测试</h1>
      <p>这不是心理测评，这是一次面向研究生学术生存状态的公开点名。</p>
      <p>测完你会得到一个人格、一份系统副标题，以及一个来自 Rubbish 宇宙的拟投稿去向。</p>
      <button type="button" data-action="start-test">开始测试</button>
    </div>
  `;
}
