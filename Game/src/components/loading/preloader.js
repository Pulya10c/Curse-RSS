// eslint-disable-next-line eslint no-eval
import './preloader.css';

// eslint-disable-next-line func-names
window.onload = function () {
  setTimeout(() => { window.document.querySelector('.loaderArea').className += ' stop'; }, 1500);
};
