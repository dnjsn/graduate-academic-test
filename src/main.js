import { baseQuestions, hiddenQuestions } from './content/questions.js';
import { journals } from './content/journals.js';
import { hiddenPersonas, personas } from './content/personas.js';
import { buildResultViewModel } from './lib/result-engine.js';
import { rankPersonas, scoreAnswers } from './lib/scoring.js';
import { getVisibleQuestions } from './lib/visible-questions.js';
import { createInitialState, resetState } from './state/app-state.js';
import { renderShell } from './ui/app-shell.js';
import { renderIntroScreen } from './ui/render-intro.js';
import { renderResultScreen } from './ui/render-result.js';
import { renderTestScreen } from './ui/render-test.js';

const root = document.getElementById('app');
const state = createInitialState();

function shuffle(items) {
  const copied = [...items];

  for (let index = copied.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copied[index], copied[swapIndex]] = [copied[swapIndex], copied[index]];
  }

  return copied;
}

function getProgress() {
  const visibleQuestions = getVisibleQuestions({
    orderedQuestions: state.orderedQuestions,
    hiddenQuestions,
    answers: state.answers,
  });
  const current = visibleQuestions.filter((question) => state.answers[question.id]).length;

  return {
    current,
    total: visibleQuestions.length,
  };
}

function renderApp() {
  const visibleQuestions = getVisibleQuestions({
    orderedQuestions: state.orderedQuestions,
    hiddenQuestions,
    answers: state.answers,
  });

  root.innerHTML = renderShell({
    activeScreen: state.screen,
    introContent: renderIntroScreen(),
    testContent: renderTestScreen({
      progress: getProgress(),
      questions: visibleQuestions,
      answers: state.answers,
    }),
    resultContent: state.result
      ? renderResultScreen(state.result)
      : '<div class="result-placeholder">结果页建设中。</div>',
  });
}

function startTest() {
  Object.assign(state, resetState(shuffle(baseQuestions)));
  renderApp();
}

function submitTest() {
  const visibleQuestions = getVisibleQuestions({
    orderedQuestions: state.orderedQuestions,
    hiddenQuestions,
    answers: state.answers,
  });
  const profile = scoreAnswers({
    questions: visibleQuestions,
    answers: state.answers,
  });
  const rankedPersonas = rankPersonas({
    profile,
    personas,
  });

  state.result = buildResultViewModel({
    answers: state.answers,
    profile,
    rankedPersonas,
    hiddenPersonas,
    journals,
  });
  state.screen = 'result';
  renderApp();
}

if (root) {
  renderApp();

  root.addEventListener('click', (event) => {
    const action = event.target.closest('[data-action]')?.dataset.action;

    if (action === 'start-test') {
      startTest();
      return;
    }

    if (action === 'submit-test') {
      submitTest();
      return;
    }

    if (action === 'restart') {
      startTest();
    }
  });

  root.addEventListener('change', (event) => {
    const input = event.target;
    if (!(input instanceof HTMLInputElement) || input.type !== 'radio') {
      return;
    }

    state.answers[input.name] = input.value;

    if (input.name === 'hidden-authorship-trigger' && input.value !== 'C') {
      delete state.answers['hidden-authorship-followup'];
    }

    if (input.name === 'hidden-clinical-trigger' && input.value !== 'C') {
      delete state.answers['hidden-clinical-followup'];
    }

    renderApp();
  });
}
