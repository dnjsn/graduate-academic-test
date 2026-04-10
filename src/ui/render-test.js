function renderOption(questionId, option, selectedId) {
  const checked = selectedId === option.id ? 'checked' : '';

  return `
    <label class="option">
      <input type="radio" name="${questionId}" value="${option.id}" ${checked} />
      <span class="option-code">${option.id}</span>
      <span>${option.label}</span>
    </label>
  `;
}

function renderQuestion(question, index, answers) {
  return `
    <article class="question-card" data-question-id="${question.id}">
      <div class="question-meta">第 ${index + 1} 题 · ${question.category}</div>
      <h2>${question.prompt}</h2>
      <div class="option-list">
        ${question.options.map((option) => renderOption(question.id, option, answers[question.id])).join('')}
      </div>
    </article>
  `;
}

export function renderTestScreen({ progress, questions, answers = {} }) {
  const isComplete = progress.total > 0 && progress.current === progress.total;

  return `
    <div class="test-screen">
      <header class="test-header">
        <div>
          <p class="eyebrow">研究生学术命运预审问卷</p>
          <p class="system-serial">流程阶段：精神样本采集中 / 处理编号：Q-${progress.current}-${progress.total}</p>
        </div>
        <div class="progress-text">${progress.current} / ${progress.total}</div>
      </header>
      <div class="question-list">
        ${questions.map((question, index) => renderQuestion(question, index, answers)).join('')}
      </div>
      <footer class="test-footer">
        <p>${isComplete ? '所有题都答完了，现在可以把命运移交编辑部。' : '答完整套题，系统才肯出具流放意见。'}</p>
        <button type="button" data-action="submit-test" ${isComplete ? '' : 'disabled'}>查看鉴定书</button>
      </footer>
    </div>
  `;
}
