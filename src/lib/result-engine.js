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
    reviewSnippet: persona.reviewSnippets[0],
    systemNote: persona.systemNote,
    profile,
  };
}
