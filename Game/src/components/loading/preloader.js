// eslint-disable-next-line eslint no-eval
import './preloader.css';

// eslint-disable-next-line func-names
window.onload = function () {
  document.querySelector('header').style.visibility = 'visible';
  document.querySelector('main').style.visibility = 'visible';
  setTimeout(() => {
    document.querySelector('.preloader').className += ' stop';
  }, 1500);
  setTimeout(() => {
    document.querySelector('.preloader.stop').style.display = 'none';
  }, 2500);
};
