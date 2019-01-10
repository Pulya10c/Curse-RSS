/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eslint no-eval */
/* eslint-disable no-eval */

import './modal-dialog.css';
import KeyCod from './keycode.min';

window.addEventListener('keydown', (e) => {
  if (document.activeElement.className === 'modal-dialog active') {
    document.querySelector('.button top-right').focus();
  }

  if (document.activeElement.tagName === 'BODY') {
    if (document.querySelector('#task10__button')) {
      document.querySelector('.task-10').focus();
    }
    if (document.querySelector('#task5__button0')) {
      document.querySelector('#task5__button0').focus();
    }
    if (document.querySelector('#task4__button')) {
      document.querySelector('#task4__button').focus();
    }
    if (document.querySelector('#task9__button1')) {
      document.querySelector('#task9__button1').focus();
    }
    if (document.querySelector('#task3__button')) {
      document.querySelector('.task-3').focus();
    }
    if (document.querySelector('#task8__button')) {
      document.querySelector('.task-8').focus();
    }
    if (document.querySelector('#task2__button1')) {
      document.querySelector('#task2__button1').focus();
    }
    if (document.querySelector('#task7__button')) {
      document.querySelector('.task-7').focus();
    }
    if (document.querySelector('#task1__button')) {
      document.querySelector('.task-1').focus();
    }
    if (document.querySelector('#task6__button')) {
      document.querySelector('.task-6').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_DOWN || e.keyCode === KeyCod.KEY_UP) {
    if (document.activeElement.id === 'task5__button0') {
      document.querySelector('#task5__button0').focus();
    } else if (document.activeElement.id === 'task5__button0') {
      document.querySelector('#task5__button1').focus();
    } else if (document.activeElement.id === 'task5__button1') {
      document.querySelector('#task5__button2').focus();
    } else if (document.activeElement.id === 'task5__button2') {
      document.querySelector('#task5__button3').focus();
    } else if (document.activeElement.id === 'task5__button3') {
      document.querySelector('#task5__button4').focus();
    } else if (document.activeElement.id === 'task5__button4') {
      document.querySelector('#task5__button0').focus();
    }
    if (document.activeElement.id === 'task9__button1') {
      document.querySelector('#task9__button2').focus();
    } else if (document.activeElement.id === 'task9__button2') {
      document.querySelector('#task9__button1').focus();
    }
    if (document.activeElement.id === 'task2__button1') {
      document.querySelector('#task2__button2').focus();
    } else if (document.activeElement.id === 'task2__button2') {
      document.querySelector('#task2__button3').focus();
    } else if (document.activeElement.id === 'task2__button3') {
      document.querySelector('#task2__button1').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_SPASE) {
    e.preventDefault();

    if (!(document.activeElement.id === 'home') || !(document.activeElement.id === 'mute')
    || !(document.activeElement.id === 'score') || !(document.activeElement.id === 'start-game')
    || !(document.activeElement.id === 'exit-game')) {
      document.querySelector('#home').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_ESC) {
    e.preventDefault();
    document.querySelector('body').focus();
  }

  if (e.keyCode === KeyCod.KEY_SPASE) {
    e.preventDefault();
    if (!(document.activeElement.id === 'home') || !(document.activeElement.id === 'mute')
    || !(document.activeElement.id === 'score') || !(document.activeElement.id === 'start-game')
    || !(document.activeElement.id === 'exit-game')) {
      document.querySelector('#home').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_LEFT || e.keyCode === KeyCod.KEY_RIGHT) {
    if (document.activeElement.id === 'home') {
      document.querySelector('#score').focus();
    } else if (document.activeElement.id === 'score') {
      document.querySelector('#start-game').focus();
    } else if (document.activeElement.id === 'start-game') {
      document.querySelector('#exit-game').focus();
    } else if (document.activeElement.id === 'exit-game') {
      document.querySelector('#home').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_DOWN || e.keyCode === KeyCod.KEY_UP
    || e.keyCode === KeyCod.KEY_LEFT || e.keyCode === KeyCod.KEY_RIGHT) {
    if (document.activeElement.className === 'button top-left') {
      document.querySelector('.button.top-right').focus();
    } else if (document.activeElement.className === 'button top-right') {
      document.querySelector('.button.bottom-right').focus();
    } else if (document.activeElement.className === 'button bottom-right') {
      document.querySelector('.button.bottom-left').focus();
    } else if (document.activeElement.className === 'button bottom-left') {
      document.querySelector('.button.top-left').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_ENTER) {
    if (document.activeElement.id === 'login') {
      document.querySelector('#password').focus();
    }
    if (document.activeElement.id === 'password') {
      document.querySelector('#begining').click();
    }

    if (document.activeElement.className === 'task-10') {
      document.querySelector('#task10__button').click();
    }
    if (document.activeElement.className === 'task-4') {
      document.querySelector('#task4__button').click();
    }
    if (document.activeElement.className === 'task-3') {
      document.querySelector('#task3__button').click();
    }
    if (document.activeElement.className === 'task-8') {
      document.querySelector('#task8__button').click();
    }
    if (document.activeElement.className === 'task-7') {
      document.querySelector('#task7__button').click();
    }
    if (document.activeElement.className === 'task-1') {
      document.querySelector('#task1__button').click();
    }
    if (document.activeElement.className === 'task-6') {
      document.querySelector('#task6__button').click();
    }
  }
});
