function pickJournalName(persona, profile) {
  if (persona.id === 'almost-significant' && (profile.shortcutSmell || 0) >= 6) {
    return 'Rubbish Medicine';
  }

  if (persona.id === 'meta-cures-all' && (profile.shortcutSmell || 0) >= 8) {
    return 'Rubbish Reviews';
  }

  if (persona.id === 'check-public-database-first' && (profile.shortcutSmell || 0) >= 8) {
    return 'Rubbish Bioinformatics';
  }

  return persona.journalPool[0];
}

function pickDecision(persona, profile) {
  if (persona.id === 'lucky-graduate') {
    return 'Priority Handling';
  }

  if (persona.id === 'some-journal-will-take-it' && (profile.submissionFatalism || 0) >= 8) {
    return 'Transferred to Rubbish Reports';
  }

  if (persona.id === 'nobel-at-proposal' && (profile.topicInflation || 0) >= 8) {
    return 'Rejected in Current Form';
  }

  return persona.verdictPool[0];
}

function pickGraduationOutcome({ persona, profile, answers }) {
  if (persona.id === 'lucky-graduate' || answers.q22 === 'C') {
    return {
      title: '有缘毕业',
      note: '你未必每一步都稳，但命运暂时愿意给你留一条毕业通道。',
    };
  }

  if (
    (profile.advisorStress || 0) >= 9 &&
    (profile.submissionFatalism || 0) >= 9 &&
    (profile.laborBurden || 0) >= 7
  ) {
    return {
      title: '劝退边缘试探',
      note: '系统检测到你正在科研、情绪和培养流程的交界处来回试探。',
    };
  }

  if ((profile.advisorStress || 0) >= 8 && (profile.laborBurden || 0) >= 6) {
    return {
      title: '延毕观察',
      note: '你和“再做一轮实验”之间，往往只差导师的一句“还可以再补一点”。',
    };
  }

  if ((profile.significanceFixation || 0) >= 8 || persona.id === 'almost-significant') {
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
  const persona = hiddenPersona || rankedPersonas[0];
  const journalName = pickJournalName(persona, profile);
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
