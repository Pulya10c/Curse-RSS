/* eslint-disable no-undef */
/* eslint-disable no-plusplus */

import Sortable from './sortir';
import words from './json/words.json';

export default function shuffleLettersWord() {
  const task = document.querySelector('#task-to-solve');
  const word = words[[Math.floor(Math.random() * 30)]].split('');
  const ask = word;
  const ask2 = word.join('');
  for (let i = word.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = word[i];
    word[i] = word[j];
    word[j] = tmp;
  }
  const template = ask.map((item, idx) => `<div id ="number${idx}" class = "task-4" style = "border: 2px solid red;width: 38px;margin-left: 2px;margin-right: 2px;" type="text">${item}</div>`);
  task.innerHTML = `<div class="task__condition_task4">
      <p class = "text-task">Соберите слово из букв: </p>  
     </div>
     <div id = "sortTrue" class = "word-box">
     ${template.join('')}
     </div>
     <input id = "task4__button" class="task__button" type="button" value="Ответить">`;
  Sortable.create(sortTrue, {
    group: 'sorting',
    sort: true,
  });
  return ask2;
}
