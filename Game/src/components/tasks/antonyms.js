
import words from './json/antonyms.json';

export default function antonyms() {
  const task = document.querySelector('#task-to-solve');
  const word = words[Math.floor(Math.random() * words.length)];
  task.innerHTML = `<div class="task__condition">
      <p>Cлово противоположное по значению:</p>
      </div>
      <div class = "word task">
      <p class = "wordTask6" style = "color: green;margin: 0;white-space: pre;">${word.word} - </p>
      <input autofocus class = "task-6" type="text" style = 'width: ${word.antonym.length * 20}px;border: 2px solid red;'>
      </div>
     <input id = "task6__button" class="task__button" type="button" value="Ответить">`;
  document.querySelector('.task-6').focus();
  return word.antonym;
}
