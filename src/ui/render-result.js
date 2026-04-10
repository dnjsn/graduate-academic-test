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
  reviewSnippet,
  systemNote,
  profile,
}) {
  return `
    <div class="result-screen">
      <div class="journal-banner">
        <p class="eyebrow">Recommended Destination</p>
        <h2>${journal.title}</h2>
        <p>${journal.notes || ''}</p>
      </div>
      <div class="persona-card">
        <p class="eyebrow">Academic Persona</p>
        <h1>${persona.title}</h1>
        <p class="subtitle">${persona.subtitle}</p>
        <div class="decision-chip">${decision}</div>
        <p class="blurb">${persona.blurb}</p>
      </div>
      <div class="result-grid">
        <section>
          <h3>Editorial Comment</h3>
          <p>${reviewSnippet}</p>
        </section>
        <section>
          <h3>System Note</h3>
          <p>${systemNote}</p>
        </section>
      </div>
      <section class="profile-card">
        <h3>Profile</h3>
        ${renderProfile(profile)}
      </section>
      <button type="button" data-action="restart">重新测试</button>
    </div>
  `;
}
