const dimensionLabels = {
  topicInflation: '选题膨胀度',
  rhetoricStitching: '修辞缝合度',
  significanceFixation: '显著性执念',
  advisorStress: '导师应激度',
  submissionFatalism: '投稿宿命感',
  laborBurden: '学术劳工感',
  shortcutSmell: '医学捷径嗅觉',
};

function renderProfile(profile) {
  return Object.entries(profile)
    .map(
      ([key, value]) => `
        <div class="metric-row">
          <span>${dimensionLabels[key] || key}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join('');
}

export function renderResultScreen({
  persona,
  journal,
  decision,
  graduationOutcome,
  reviewSnippet,
  systemNote,
  profile,
}) {
  return `
    <div class="result-screen">
      <div class="result-alert">系统异常提示：以下结论仅供扩散，不供申诉。</div>
      <div class="journal-banner">
        <div class="stamp">鉴定完成</div>
        <p class="eyebrow">建议流放地</p>
        <p class="system-serial">Rubbish Publishing Group / 流放建议编号：RJ-${decision.replace(/\s+/g, '-')}</p>
        <h2>${journal.title}</h2>
        <p>${journal.notes || ''}</p>
      </div>
      <div class="persona-card">
        <p class="eyebrow">学术病理分型</p>
        <h1>${persona.title}</h1>
        <p class="subtitle">${persona.subtitle}</p>
        <div class="decision-chip">${decision}</div>
        <p class="blurb">${persona.blurb}</p>
      </div>
      <div class="result-grid">
        <section>
          <h3>培养结局</h3>
          <p><strong>${graduationOutcome?.title || '顺利毕业'}</strong></p>
          <p>${graduationOutcome?.note || ''}</p>
        </section>
        <section>
          <h3>编辑部口头超度</h3>
          <p>${reviewSnippet}</p>
        </section>
        <section>
          <h3>系统冷读结果</h3>
          <p>${systemNote}</p>
        </section>
      </div>
      <section class="profile-card">
        <h3>异常指标面板</h3>
        ${renderProfile(profile)}
      </section>
      <button type="button" data-action="restart">重新测试</button>
    </div>
  `;
}
