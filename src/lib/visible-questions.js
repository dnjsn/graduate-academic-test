export function getVisibleQuestions({ orderedQuestions, hiddenQuestions, answers }) {
  const visible = [...orderedQuestions];
  const authorshipQuestion = hiddenQuestions.find(
    (question) => question.id === 'hidden-authorship-followup',
  );
  const clinicalQuestion = hiddenQuestions.find(
    (question) => question.id === 'hidden-clinical-followup',
  );

  const authorshipTriggerIndex = visible.findIndex(
    (question) => question.id === 'hidden-authorship-trigger',
  );
  if (
    authorshipQuestion &&
    authorshipTriggerIndex >= 0 &&
    answers['hidden-authorship-trigger'] === 'C'
  ) {
    visible.splice(authorshipTriggerIndex + 1, 0, authorshipQuestion);
  }

  const clinicalTriggerIndex = visible.findIndex(
    (question) => question.id === 'hidden-clinical-trigger',
  );
  if (
    clinicalQuestion &&
    clinicalTriggerIndex >= 0 &&
    answers['hidden-clinical-trigger'] === 'C'
  ) {
    visible.splice(clinicalTriggerIndex + 1, 0, clinicalQuestion);
  }

  return visible;
}
