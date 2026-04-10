export function scoreAnswers({ questions, answers }) {
  return questions.reduce((totals, question) => {
    const answerId = answers[question.id];
    const option = question.options.find((item) => item.id === answerId);

    if (!option) {
      return totals;
    }

    for (const [key, value] of Object.entries(option.effects)) {
      totals[key] = (totals[key] || 0) + value;
    }

    return totals;
  }, {});
}

export function rankPersonas({ profile, personas }) {
  return [...personas]
    .map((persona) => {
      const distance = Object.entries(persona.vector).reduce(
        (sum, [key, expected]) => sum + Math.abs((profile[key] || 0) - expected),
        0,
      );

      return {
        ...persona,
        distance,
      };
    })
    .sort((left, right) => left.distance - right.distance);
}
