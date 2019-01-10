// eslint-disable-next-line eslint no-eval
import './preloader.css';

// eslint-disable-next-line func-names
window.onload = function () {
  setTimeout(() => {
    document.querySelector('.preloader').className += ' stop';
  }, 1500);
  setTimeout(() => {
    document.querySelector('.preloader.stop').style.display = 'none';
  }, 2500);
};
