
import set from './json/superfluous-word.json';

export default function superFluousWord() {
  const task = document.querySelector('#task-to-solve');
  const setOfWords = set[Math.floor(Math.random() * set.length)];
  const template = setOfWords.words.map((item, idx) => `<input tabindex="0" autofocus style = "margin-top: 0; margin-bottom: 20px;" id = "task5__button${idx}" class="task__button" type="button" value="${item}">`).join('');
  task.innerHTML = `<div class="task__condition">
      <p>Найди лишнее</p>
      </div>
      <div className = "task5">
      ${template}
      </div>`;
  document.querySelector('#task5__button0').focus();
  return setOfWords.answer;
}
