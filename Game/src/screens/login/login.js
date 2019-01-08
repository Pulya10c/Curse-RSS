/* eslint-disable import/prefer-default-export */

// import '../score/score';
import TableResult from '../score/score';

const userName = {};

document.querySelector('.register-form.form').addEventListener('click', (e) => {
  if (e.target.className === 'form__button') {
    if (document.querySelector('#login').value && document.querySelector('#password').value) {
      userName.name = document.querySelector('#login').value;
      userName.password = document.querySelector('#password').value;
      document.querySelector('.register-form.form').className += ' element--hidden';
      document.querySelector('#start-page').className += ' active';
      document.querySelector('.game-container').className = 'game-container';
      document.querySelector('.button__start').focus();
    }
  }
});

export default function ReturnUserName() {
  return userName;
}
