import spelling from './json/spelling.json';

export default function insertLetter() {
  const task = document.querySelector('#task-to-solve');
  const random = Math.floor(Math.random() * 30);
  task.innerHTML = `<div class="task__condition">
      <p>Вставьте букву:</p>
      <p id = "part1">${spelling[random].firstPart} </p>
      <input autofocus class = "task-3" type="text" style = 'width: 38px;border: 2px solid red;'>
      <p id = "part2"> ${spelling[random].secondPart}</p>   
     </div>
     <input id = "task3__button" class="task__button" type="button" value="Ответить">`;
  document.querySelector('.task-3').focus();
  return spelling[random].letter;
}
