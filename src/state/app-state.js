export function createInitialState() {
  return {
    screen: 'intro',
    orderedQuestions: [],
    answers: {},
    result: null,
  };
}

export function resetState(nextQuestions = []) {
  return {
    ...createInitialState(),
    screen: 'test',
    orderedQuestions: nextQuestions,
  };
}
