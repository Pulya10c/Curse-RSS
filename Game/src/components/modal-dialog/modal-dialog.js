/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable eslint no-eval */
/* eslint-disable no-eval */

import './modal-dialog.css';
import KeyCod from './keycode.min';

// window.addEventListener('keypress', (e) => {
//   console.log('e.KeyCode', e.KeyCode);
//   console.log('KeyCode.KEY_ENTER', KeyCode.KEY_ENTER);
//   console.log(e.KeyCode === KeyCode.KEY_ENTER);
//   if (e.KeyCode === KeyCode.KEY_ENTER) {
//     console.log('1');
//     e.preventDefault();
//     if (document.querySelector('.task-10')) {
//       document.querySelector('#task10__button').click();
//     }
//     if (document.querySelector('.task-4')) {
//       document.querySelector('#task4__button').click();
//     }
//     if (document.querySelector('.task-3')) {
//       document.querySelector('#task3__button').click();
//     }
//     if (document.querySelector('.task-8')) {
//       document.querySelector('#task8__button').click();
//     }
//     if (document.querySelector('.task-7')) {
//       document.querySelector('#task7__button').click();
//     }
//     if (document.querySelector('.task-1')) {
//       document.querySelector('#task1__button').click();
//     }
//     if (document.querySelector('.task-6')) {
//       document.querySelector('#task6__button').click();
//     }
//   }
// });

// console.log(KeyCod.KEY_UP);

// console.log(KeyCod.KEY_ENTER);

window.addEventListener('keydown', (e) => {
  if (e.keyCode === KeyCod.KEY_DOWN || e.keyCode === KeyCod.KEY_UP
    || e.keyCode === KeyCod.KEY_LEFT || e.keyCode === KeyCod.KEY_RIGHT) {
    if (document.activeElement.className === 'task-10') {
      document.querySelector('#task10__button').focus();
    } else if (document.activeElement.id === 'task10__button') {
      document.querySelector('.task-10').focus();
    }
    if (document.activeElement.className === 'task-4') {
      document.querySelector('#task4__button').focus();
    } else if (document.activeElement.id === 'task4__button') {
      document.querySelector('.task-4').focus();
    }
    if (document.activeElement.className === 'task-3') {
      document.querySelector('#task3__button').focus();
    } else if (document.activeElement.id === 'task3__button') {
      document.querySelector('.task-3').focus();
    }
    if (document.activeElement.className === 'task-8') {
      document.querySelector('#task8__button').focus();
    } else if (document.activeElement.id === 'task8__button') {
      document.querySelector('.task-8').focus();
    }
    if (document.activeElement.className === 'task-7') {
      document.querySelector('#task7__button').focus();
    } else if (document.activeElement.id === 'task7__button') {
      document.querySelector('.task-7').focus();
    }
    if (document.activeElement.className === 'task-1') {
      document.querySelector('#task1__button').focus();
    } else if (document.activeElement.id === 'task1__button') {
      document.querySelector('.task-1').focus();
    }
    if (document.activeElement.className === 'task-6') {
      document.querySelector('#task6__button').focus();
    } else if (document.activeElement.id === 'task6__button') {
      document.querySelector('.task-6').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_DOWN || e.keyCode === KeyCod.KEY_UP
    || e.keyCode === KeyCod.KEY_LEFT || e.keyCode === KeyCod.KEY_RIGHT) {
    if (document.activeElement.className === 'button top-left') {
      console.log('1');
      document.querySelector('.button.top-right').focus();
    } else if (document.activeElement.className === 'button top-right') {
      console.log('2');
      document.querySelector('.button.bottom-right').focus();
    } else if (document.activeElement.className === 'button bottom-right') {
      console.log('3');
      document.querySelector('.button.bottom-left').focus();
    } else if (document.activeElement.className === 'button bottom-left') {
      console.log('4');
      document.querySelector('.button.top-left').focus();
    }
  }

  if (e.keyCode === KeyCod.KEY_ENTER) {
    if (document.activeElement.className === 'task-10') {
      document.querySelector('#task10__button').focus();
      document.querySelector('#task10__button').click();
    }
    if (document.activeElement.className === 'task-4') {
      document.querySelector('#task4__button').focus();
      document.querySelector('#task4__button').click();
    }
    if (document.activeElement.className === 'task-3') {
      document.querySelector('#task3__button').focus();
      document.querySelector('#task3__button').click();
    }
    if (document.activeElement.className === 'task-8') {
      document.querySelector('#task8__button').focus();
      document.querySelector('#task8__button').click();
    }
    if (document.activeElement.className === 'task-7') {
      document.querySelector('#task7__button').focus();
      document.querySelector('#task7__button').click();
    }
    if (document.activeElement.className === 'task-1') {
      document.querySelector('#task7__button').focus();
      document.querySelector('#task1__button').click();
    }
    if (document.activeElement.className === 'task-6') {
      document.querySelector('#task6__button').focus();
      document.querySelector('#task6__button').click();
    }
  }
});
