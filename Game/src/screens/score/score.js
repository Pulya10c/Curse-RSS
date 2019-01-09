
/* eslint-disable eslint global-require */
/* eslint-disable eslint no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable-next-line eslint global-require */
/* eslint-disable-next-line eslint no-eval */
import './score.css';

export default class ScoreManadge {
  static checkForAvailbilityLevel(user, passwordUser) {
    if (localStorage.getItem('scoreGameRSS')) {
      const localScore = JSON.parse(localStorage.getItem('scoreGameRSS'));
      if (localScore.filter(item => item.name === user && item.password === passwordUser).length) {
        return localScore
          .filter(item => item.name === user && item.password === passwordUser)[0].wonFights;
      }
      return 0;
    }
    return 0;
  }

  static setScore(nameHero, passwordHero, count) {
    if (localStorage.getItem('scoreGameRSS')) {
      let localScore = JSON.parse(localStorage.getItem('scoreGameRSS'));
      if (!localScore.filter(item => item.name === nameHero
        && item.password === passwordHero).length) {
        const obj = {
          name: nameHero,
          password: passwordHero,
          wonFights: count,
        };
        const past = [...localScore, ...[obj]];
        localStorage.setItem('scoreGameRSS', JSON.stringify(past));
      } else {
        localScore = localScore
          .map(item => (item.name === nameHero
            && item.password === passwordHero ? { ...item, wonFights: count } : item));
        localStorage.setItem('scoreGameRSS', JSON.stringify(localScore));
      }
    } else {
      localStorage.setItem('scoreGameRSS', JSON.stringify([{ name: nameHero, password: passwordHero, wonFights: count }]));
    }
  }

  static drawScore() {
    let table;
    if (!document.querySelector('table')) {
      table = document.createElement('table');
      document.querySelector('.modal__top-scores').appendChild(table);
    } else {
      table = document.querySelector('table');
    }
    let scoreAll = JSON.parse(localStorage.getItem('scoreGameRSS'));
    if (!scoreAll) {
      document.querySelector('.modal__top-scores').innerHTML = 'Еще нет участников игры';
    } else {
      scoreAll = scoreAll.sort((a, b) => b.wonFights - a.wonFights);
      const line = scoreAll.map((item, idx) => `<tr><td >${idx + 1}</td><th>${item.name}</th><th>${item.wonFights}</th></tr>`);
      table.innerHTML = `
      <tbody><tr><th>позиция</th><th>Имя игрока</th><th>Количество убитых монстров</th></tr>${line.join('')}</tbody>`;
    }
  }
}
