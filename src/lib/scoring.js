import { baseQuestions, dimensionKeys, hiddenQuestions } from '../content/questions.js';

const dimensionMaxima = dimensionKeys.reduce((totals, key) => {
  totals[key] = [...baseQuestions, ...hiddenQuestions].reduce(
    (sum, question) =>
      sum + Math.max(...question.options.map((option) => option.effects[key] || 0)),
    0,
  );

  return totals;
}, {});

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
        (sum, [key, expected]) => {
          const max = dimensionMaxima[key] || 1;
          const clamped = Math.min(Math.max(expected, 0), max);

          return sum + Math.abs((profile[key] || 0) - clamped) / max;
        },
        0,
      );

      return {
        ...persona,
        distance,
      };
    })
    .sort((left, right) => left.distance - right.distance);
}
