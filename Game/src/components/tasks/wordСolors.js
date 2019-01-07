import colors from './json/word-colors.json';

export default function wordСolors() {
  const task = document.querySelector('#task-to-solve');
  const color = colors[Math.floor(Math.random() * 9)];
  task.innerHTML = `<div class="task__condition">
      <p>Напишите название цвета</p>
      </div>
      <div class = "word task" style = "border:1px solid black;margin: auto;width:100px;height:100px;background:${color.color}">
      </div>
      <input autofocus class = "task-10" type="text" style = 'text-align: center;margin:20px 0 0 13%;border: 2px solid red;'>
      <input id = "task10__button" class="task__button" type="button" value="Ответить">`;
  document.querySelector('.task-10').focus();
  return color.name;
}
