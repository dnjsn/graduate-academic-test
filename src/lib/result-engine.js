function buildSignature(persona, profile) {
  return (
    (profile.topicInflation || 0) +
    (profile.rhetoricStitching || 0) * 2 +
    (profile.significanceFixation || 0) * 3 +
    (profile.advisorStress || 0) * 5 +
    (profile.submissionFatalism || 0) * 7 +
    (profile.laborBurden || 0) * 11 +
    (profile.shortcutSmell || 0) * 13 +
    persona.id.length * 17
  );
}

function pickArchetypePersona({ rankedPersonas, profile }) {
  const findPersona = (id) => rankedPersonas.find((persona) => persona.id === id);

  if ((profile.laborBurden || 0) >= 7 && (profile.advisorStress || 0) >= 6) {
    return findPersona('i-do-the-work-you-take-the-name');
  }

  if ((profile.shortcutSmell || 0) >= 8 && (profile.rhetoricStitching || 0) >= 4) {
    return findPersona('meta-cures-all');
  }

  if ((profile.shortcutSmell || 0) >= 7 && (profile.submissionFatalism || 0) >= 7) {
    return findPersona('check-public-database-first');
  }

  if ((profile.significanceFixation || 0) >= 7) {
    return findPersona('almost-significant');
  }

  if ((profile.topicInflation || 0) >= 3 && (profile.submissionFatalism || 0) <= 6) {
    return findPersona('nobel-at-proposal');
  }
}

function pickJournalName(persona, profile, journals) {
  const signature = buildSignature(persona, profile);
  const allJournalNames = Object.keys(journals);

  if (persona.id === 'co-first-is-negotiable') {
    return signature % 2 === 0 ? 'Trends in Rubbish' : 'Rubbish Communications';
  }

  if (persona.id === 'i-do-the-work-you-take-the-name') {
    return signature % 2 === 0 ? 'Trends in Rubbish' : 'Rubbish Reports';
  }

  if (persona.id === 'teacher-is-looking-for-me') {
    return signature % 2 === 0 ? 'Rubbish NAS' : 'Rubbish Communications';
  }

  if (persona.id === 'apologize-before-reply') {
    return signature % 2 === 0 ? 'Rubbish Revision Research' : 'Rubbish Communications';
  }

  if (persona.id === 'check-public-database-first' && (profile.shortcutSmell || 0) >= 8) {
    return signature % 2 === 0 ? 'Rubbish Bioinformatics' : 'Rubbish Reviews';
  }

  if (persona.id === 'meta-cures-all') {
    if ((profile.shortcutSmell || 0) >= 8 && (profile.rhetoricStitching || 0) >= 4) {
      return signature % 2 === 0 ? 'Rubbish Metabolism' : 'Rubbish Reviews';
    }
  }

  if ((profile.advisorStress || 0) >= 9 && (profile.laborBurden || 0) >= 6) {
    return ['Rubbish NAS', 'Trends in Rubbish', 'Rubbish Revision Research'][
      Math.abs(signature) % 3
    ];
  }

  if ((profile.significanceFixation || 0) >= 7) {
    return ['Rubbish Methods', 'Rubbish Medicine', 'Rubbish Reports'][
      Math.abs(signature) % 3
    ];
  }

  return allJournalNames[Math.abs(signature) % allJournalNames.length];
}

function pickDecision(persona, profile) {
  if (persona.id === 'lucky-graduate') {
    return 'Priority Handling';
  }

  const pool = persona.verdictPool.length > 0 ? persona.verdictPool : ['With Editor'];
  const signature = buildSignature(persona, profile);

  return pool[Math.abs(signature) % pool.length];
}

function pickGraduationOutcome({ persona, profile, answers }) {
  if (
    persona.id === 'lucky-graduate' ||
    (answers.q22 === 'C' &&
      (profile.submissionFatalism || 0) >= 10 &&
      (profile.advisorStress || 0) >= 4)
  ) {
    return {
      title: '有缘毕业',
      note: '你未必每一步都稳，但命运暂时愿意给你留一条毕业通道。',
    };
  }

  if (
    (profile.advisorStress || 0) >= 9 &&
    (profile.submissionFatalism || 0) >= 9 &&
    (profile.laborBurden || 0) >= 5
  ) {
    return {
      title: '劝退边缘试探',
      note: '系统检测到你正在科研、情绪和培养流程的交界处来回试探。',
    };
  }

  if ((profile.advisorStress || 0) >= 7 && (profile.laborBurden || 0) >= 4) {
    return {
      title: '延毕观察',
      note: '你和“再做一轮实验”之间，往往只差导师的一句“还可以再补一点”。',
    };
  }

  if ((profile.significanceFixation || 0) >= 6 || persona.id === 'almost-significant') {
    return {
      title: '建议再做一轮实验',
      note: '目前系统判断你离毕业差的不是勇气，而是一轮看起来更完整的新数据。',
    };
  }

  return {
    title: '顺利毕业',
    note: '暂未检出明显延毕气息，但这不代表命运之后不会临时加审稿意见。',
  };
}

export function buildResultViewModel({
  answers,
  profile,
  rankedPersonas,
  hiddenPersonas,
  journals,
}) {
  const hiddenPersona = hiddenPersonas.find((persona) =>
    persona.matches({ answers, profile }),
  );
  const archetypePersona = hiddenPersona ? null : pickArchetypePersona({ rankedPersonas, profile });
  const persona = hiddenPersona || archetypePersona || rankedPersonas[0];
  const journalName = pickJournalName(persona, profile, journals);
  const journal = journals[journalName];

  return {
    persona,
    journal,
    decision: pickDecision(persona, profile),
    graduationOutcome: pickGraduationOutcome({ persona, profile, answers }),
    reviewSnippet: persona.reviewSnippets[0],
    systemNote: persona.systemNote,
    profile,
  };
}
