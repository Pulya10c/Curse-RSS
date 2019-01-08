import cities from './json/cities.json';

export default function sities() {
  const task = document.querySelector('#task-to-solve');
  const city = cities[Math.floor(Math.random() * 31)];
  task.innerHTML = `<div class="task__condition">
      <p>в какой стране находится город</p>
      </div>
      <div class = "word task">
      <p class = "wordTask7" style = "color: green;margin: 0;white-space: pre;">${city.city} - </p>
      <input autofocus class = "task-7" type="text" style = 'width: ${city.country.length * 20}px;border: 2px solid red;'>
      </div>
     <input id = "task7__button" class="task__button" type="button" value="Ответить">`;
  document.querySelector('.task-7').focus();
  return city.country;
}
