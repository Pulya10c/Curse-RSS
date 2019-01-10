/* eslint-disable eslint no-eval */
/* eslint-disable no-eval */

import './navigation.css';
import '../../screens/battle/img/volume-of.png';
import '../../screens/battle/img/volume-on.png';

document.querySelector('#home').addEventListener('click', () => {
  window.location.href = './index.html';
});

document.querySelector('#control').addEventListener('click', () => {
  document.querySelector('#windows__control').className = 'modal-control';
  setTimeout(() => {
    document.querySelector('#windows__control').className += ' element--hidden';
  }, 3000);
});

document.querySelector('#exit-game').addEventListener('click', () => {
  document.querySelector('#start-game').className = 'menu-navigation';
  document.querySelector('#score').className = 'menu-navigation disabled';
  document.querySelector('#mute').className = 'menu-navigation disabled';
  // eslint-disable-next-line no-restricted-globals
  location.reload();
});

document.querySelector('#start-game').addEventListener('click', () => {
  document.querySelector('#register-form').className = 'register-form form';
  document.querySelector('#login').focus();
  document.querySelector('#start-game').className += ' disabled';
  document.querySelector('#score').className = 'menu-navigation';
  document.querySelector('#mute').className = 'menu-navigation sound-on';
});

document.querySelector('#score').addEventListener('click', () => {
  document.querySelector('#top-scores').className = 'modal';
  setTimeout(() => {
    document.querySelector('#top-scores').className += ' element--hidden';
  }, 5000);
});

document.querySelector('#mute').addEventListener('click', () => {
  if (document.querySelector('audio')) {
    if (document.querySelector('#mute').className === 'menu-navigation sound-on') {
      document.querySelector('#mute').className = 'menu-navigation sound-off';
      document.querySelector('audio').volume = 0;
    } else if (document.querySelector('#mute').className === 'menu-navigation sound-off') {
      document.querySelector('#mute').className = 'menu-navigation sound-on';
      document.querySelector('audio').volume = 0.1;
    }
  }
});
