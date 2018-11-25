// хранит нужную инфу о карточках из YouTube
// import addEvent from './EventResize';

import makeCard from './makeCard.js';
import TemplateInfoAPI from './TemplateInfoAPI.js';
import removeSlider from './removeSlider.js';
import makeUrl from './makeUrl.js';

let boxOfCards = [];
let storageInf = {
  oldNumberSlidesVisible: 1,
  downloadCard: false,
  firstStart: true,
  createNewBoxWith: 0,
  downloadInfFrom: 0,
  totalPoint: 0,
  numberSlidesVisible: 0,
  activeSlide: 1,
  baseLink: 'https://www.googleapis.com/youtube/v3/search?key=',
  apiKey: 'AIzaSyCgCRPxX8s0foqCwaW72egv-WCz6qazjQs',
};

window.onload = function loaderPages() {
  const createPage = document.createElement('main');
  createPage.innerHTML = `<div id = 'wrapper' class='wrapper size4'>
                            <div class='searchPanel'>
                            <div class='searchQuery'>
                            <div id = 'download' class='spinner'></div>
                            <input class='buttonSearch' type='button' value=''>
                            <input class='searchQueryInput' type='search' id='searchValue' placeholder='you enter information search' value=''>           
                            </div>
                            </div>
                            <div class='Panel'>
                            <div class='cardPanel'>
                            </div>
                            </div> 
                            <div class='sliderPanel'>
                            </div>
                            </div>`;

  document.body.appendChild(createPage);
  storageInf = resizeWindow(storageInf);
  storageInf.playStart = true;
  storageInf.firstStart = true;
};

const newLocalTime = 200;
(function ev() {
  let time;
  window.onresize = function tim() {
    if (time) { clearTimeout(time); }
    time = setTimeout(() => {
      storageInf = resizeWindow(storageInf);
    }, newLocalTime);
  };
}());

function resizeWindow(object) {
  let obj = object;
  if (window.innerWidth > 1019) { obj.numberSlidesVisible = 4; }
  if (window.innerWidth > 774 && window.innerWidth < 1020) { obj.numberSlidesVisible = 3; }
  if (window.innerWidth > 534 && window.innerWidth < 775) { obj.numberSlidesVisible = 2; }
  if (window.innerWidth < 535) { obj.numberSlidesVisible = 1; }
  if (obj.oldNumberSlidesVisible !== obj.numberSlidesVisible) {
    switch (obj.numberSlidesVisible) {
      case 1: changeSizeWraper('size1');
        break;
      case 2: changeSizeWraper('size2');
        break;
      case 3: changeSizeWraper('size3');
        break;
      case 4: changeSizeWraper('size4');
        break;
      default:
    }

    if (obj.firstStart !== true) {
      if (obj.oldNumberSlidesVisible < obj.numberSlidesVisible) {
        const lodSl = Math.ceil(boxOfCards.length / obj.numberSlidesVisible);
        obj.totalPoint = lodSl;
        removeSlider(obj);
        obj = addSlider(obj);
        obj = setActiveSlide(obj.activeSlide, obj);
        makeCard(obj, boxOfCards);
      }
      if (obj.oldNumberSlidesVisible > obj.numberSlidesVisible) {
        const lodSl = Math.ceil(boxOfCards.length / obj.numberSlidesVisible);
        obj.totalPoint = lodSl;
        removeSlider(obj);
        obj = addSlider(obj);
        makeCard(obj, boxOfCards);
        obj = setActiveSlide(obj.activeSlide, obj);
      }
    }
  }
  obj.oldNumberSlidesVisible = obj.numberSlidesVisible;
  return obj;
}

/* формирование запроса API */
function IdVideo(object) {
  const obj = object;
  function SearchKeyValue(next) {
    // eslint-disable-next-line no-restricted-syntax
    for (const key in next) {
      if (key === 'id') { return next[key].videoId; }
    }
  }
  const result = obj.items.map(SearchKeyValue).join(',');
  return [result, obj.nextPageToken];
}

// function TemplateInfoAPI(object) {
//   const obj = object;
//   function SearchInfoValue(item) {
//     const ObjectInf = {};
//     ObjectInf.user = item.snippet.channelTitle;
//     ObjectInf.url = item.snippet.thumbnails.medium.url;
//     ObjectInf.description = item.snippet.description;
//     ObjectInf.title = item.snippet.title;
//     ObjectInf.viewCount = item.statistics.viewCount;
//     ObjectInf.date = item.snippet.publishedAt.substring(0, item.snippet.publishedAt.indexOf('T'));
//     ObjectInf.Idlink = `https://www.youtube.com/watch?v=${item.id}`;
//     return ObjectInf;
//   }
//   const result = obj.items.map(SearchInfoValue);
//   return result || alert('Sorry, can\'t API YouTube response data');
// }

// function makeUrl(object, options) {
//   let url;
//   const obj = object;
//   if (options === 1) {
//     url = `https://www.googleapis.com/youtube/v3/search?key=${obj.apiKey}&type=video&part=snippet&maxResults=15&q=${obj.endpoint}`;
//   }
//   if (options === 2 && obj.nextPage) {
//     url = `https://www.googleapis.com/youtube/v3/search?key=${obj.apiKey}&type=video&part=snippet&maxResults=15&q=${obj.endpoint}&pageToken=${obj.nextPage}`;
//   }
//   if (options === 3 && obj.Id) {
//     url = `https://www.googleapis.com/youtube/v3/videos?key=${obj.apiKey}&id=${obj.Id}&part=snippet,statistics`;
//   }
//   return url;
// }

async function loadAPI(options, callback, obj) {
  // eslint-disable-next-line no-return-await
  return await fetch(makeUrl(obj, options), {
    credentials: 'same-origin',
    method: 'GET',
    mode: 'cors',
  }).then(response => response.json())
    .then(data => callback(data))
    .catch(error => alert(`Sorry, can't API YouTube response data ${error}`));
}

async function makeRequest(object) {
  let obj = object;
  // spiner = document.getElementById('download');
  // spiner.className += ' active';
  loadAPI(1, IdVideo, obj)
    .then((res) => {
      storageInf.Id = res[0];
      storageInf.nextPage = res[1];
    });
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  loadAPI(3, TemplateInfoAPI, obj)
    .then((res) => {
      boxOfCards = [...boxOfCards, ...res];
    });

  setTimeout(() => {
    makeCard(obj, boxOfCards);
    obj = addSlider(obj);
  }, 500);
  return obj;
}

async function downloadRequest(object) {
  let obj = object;
  loadAPI(2, IdVideo, obj)
    .then((res) => {
      storageInf.Id = res[0];
      storageInf.nextPage = res[1];
    });
  await new Promise((resolve, reject) => setTimeout(resolve, 500));
  loadAPI(3, TemplateInfoAPI, obj)
    .then((res) => {
      boxOfCards = [...boxOfCards, ...res];
    });

  setTimeout(() => {
    obj.firstStart = true;
    obj.totalPoint = Math.ceil(boxOfCards.length / obj.numberSlidesVisible);
    removeSlider(obj);
    obj = addSlider(obj);

    obj = setActiveSlide(obj.activeSlide, obj);
    makeCard(obj, boxOfCards);
  }, 500);
  return obj;
}

// function makeCard(object) {
//   const obj = object;
//   if (obj.firstStart !== true && obj.downloadCard !== true) {
//     removeElement('cardPanel');
//   }
//   for (let i = 0; i < Math.ceil(boxOfCards.length / obj.numberSlidesVisible); i++) {
//     const newPanel = document.createElement('div');
//     newPanel.className = 'content';
//     newPanel.id = `number${i + 1}`;
//     document.querySelector('.cardPanel').appendChild(newPanel);
//     for (let j = 0; j < obj.numberSlidesVisible; j++) {
//       if (j + i * obj.numberSlidesVisible < boxOfCards.length) {
//         const newCard = document.createElement('div');
//         newCard.className += 'youtubeCard';
//         newCard.innerHTML = createCard(boxOfCards[j + i * obj.numberSlidesVisible]);
//         document.querySelector(`#number${i + 1}`).appendChild(newCard);
//       }
//     }
//   }
//   document.querySelector(`#number${obj.activeSlide}`).className = document.querySelector(`#number${obj.activeSlide}`).className.replace('content', 'content active');
// }
// хранит данные из API для карточками

function start(object) {
  const obj = object;
  if (obj.firstStart !== true) {
    removeElement('cardPanel');
    removeSlider(obj);
  }
  obj.activeSlide = 1;
  makeRequest(obj);
  return obj;
}

/** ********************************** */

function removeElement(className) {
  const conteinerLengthChild = document.querySelector(`.${className}`).children.length;
  if (conteinerLengthChild) {
    const conteinerChildren = document.querySelector(`.${className}`).children;
    for (let i = conteinerLengthChild - 1; i >= 0; i--) {
      conteinerChildren[i].parentNode.removeChild(conteinerChildren[i]);
    }
  }
}

// function removeSlider(object) {
//   const obj = object;
//   if (obj.playStart !== true) {
//     if(document.querySelector('.wrapperSlider')) {
//     document.querySelector('.wrapperSlider').remove();
//     }
//   }
// }

/* Отслеживание собитий в инпуте по нажатию Enter */
window.addEventListener('keypress', (e) => {
  if (e.target.className === 'searchQueryInput') {
    switch (e.keyCode) {
      case 13:
        if (document.getElementById('searchValue').value !== '') {
          boxOfCards = [];
          storageInf.endpoint = document.getElementById('searchValue').value;
          start(storageInf);
        } else alert("You didn't enter a query text");// если не ввели текст выведет сообщение
        break;
      default:
    }
  }
});

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.className === 'buttonSearch') {
    if (document.getElementById('searchValue').value !== '') {
      storageInf.endpoint = document.getElementById('searchValue').value;
      boxOfCards = [];
      start(storageInf);
    } else Error("You didn't enter a query text");
  }
  if (e.target.className === 'labelDot') {
    storageInf.activeSlide = +e.target.textContent;
    storageInf = setActiveSlide(+e.target.textContent, storageInf);
  }
});

/** *********************************** */

function setActiveSlide(oldSlide, object) {
  let obj = object;
  obj.activeSlide = Math.ceil(((oldSlide - 1) * obj.oldNumberSlidesVisible + 1) / obj.numberSlidesVisible);
  obj = slideChangeRun(obj.activeSlide, obj);

  const allDotsSlider = document.querySelectorAll('.labelDot');
  for (let i = 0; i < obj.totalPoint; i++) {
    allDotsSlider[i].className = allDotsSlider[i].className.replace(' active', '');
  }
  document.getElementById(`Label${obj.activeSlide}`).className += ' active';
  return obj;
}

// function createCard(object) {
//   const obj = object;
//   const CardLayout = `<a class="nameCard" target="_blank" href = "${obj.Idlink}" >${obj.title}</a>
//                         <div class="imgBGYouTube">
//                         <img src="${obj.url}" alt="images YouTube" class="fotoBGCard"/>
//                         </div>
//                         <div class="allInfCard">
//                         <span class="infoUser"><p class = 'textInfo'>${obj.user}</p></span>
//                         <span class="infoDate"><p class = 'textInfo'>${obj.date}</p></span>
//                         <span class="infoView"><p class = 'textInfo'>${obj.viewCount}</p></span>
//                         </div>
//                         <div class="descriptionCard">
//                         <p class="infoDscCard"> ${obj.description}</p>
//                         </div>`;


//   return CardLayout;
// }

function changeSizeWraper(size) {
  const wrapperSize = document.getElementById('wrapper');
  wrapperSize.className = String.apply(wrapperSize.className).slice(0, -6);
  wrapperSize.className += `wrapper ${size}`;
}

/** ************************************ */

function addSlider(object) {
  const obj = object;
  const sizeSlider = Math.ceil(boxOfCards.length / obj.numberSlidesVisible);
  let CreateNumberPoints = '';
  let CreateNumberLabel = '';
  const createPage = document.createElement('div');
  createPage.className = 'wrapperSlider';
  createPage.id = 'wrapperSlider';
  for (let i = 1; i < sizeSlider + 1; i++) {
    CreateNumberPoints += `<input class="radiobatton" type="radio" name="point" id="slide${i}"></input>`;
    CreateNumberLabel += `<label id = "Label${i}" class = 'labelDot${(function act() { return (i === obj.activeSlide) ? ' active' : ''; }())}' for="slide${i}">${i}</label>`;
  }
  createPage.innerHTML = `${CreateNumberPoints}<div id="switchControl" class="switchControl">${CreateNumberLabel}</div>`;
  document.querySelector('.sliderPanel').appendChild(createPage);
  obj.totalPoint = sizeSlider;
  obj.firstStart = false;
  obj.playStart = false;
  return obj;
}

function slideChangeRun(active, object) {
  const obj = object;
  const cards = document.querySelectorAll('.youtubeCard');
  const pointShift = document.querySelector('.switchControl');
  const content = document.querySelectorAll('.content');
  let step;

  if (active > obj.totalPoint - 2) {
    if (obj.nextPage) {
      downloadRequest(obj);
    }
  }

  if (active > 2) {
    step = -30 * (active - 3);
    pointShift.style.left = `${step}px`;
  }
  if (active < 3 && active > (obj.totalPoint - 2)) {
    step = 0;
    pointShift.style.left = `${step}px`;
  }
  if (active) {
    for (let i = 0; i < cards.length; i++) {
      cards[i].className = cards[i].className.replace('youtubeCard', 'youtubeCard effect');
    }
    for (let i = 0; i < content.length; i++) {
      content[i].className = '';
      content[i].className = 'content';
    }
    document.querySelector(`#number${active}`).className = document.querySelector(`#number${active}`).className.replace('content', 'content active');
    for (let i = 0; i < cards.length; i++) {
      cards[i].className = cards[i].className.replace(' effect', '');
    }
  }
  obj.activeSlide = +active;
  return obj;
}

let touchstartX = 0;
let touchendX = 0;
const gesuredZone = document.querySelector('body');
/* touchstart */
gesuredZone.addEventListener('mousedown', (event) => {
//   event.preventDefault();
// event.stopPropagation();
  if (event.target.className !== 'sliderPanel'
    && event.target.className !== 'labelDot'
    && event.target.className !== 'searchPanel'
    && event.target.className !== 'searchQueryInput'
    && event.target.className !== 'buttonSearch') {
    if (event.which !== 1) {
      return;
    }
    touchstartX = event.screenX;
  }
}, false);

let shift;
/* Обработайте данные */
/* Для примера */
gesuredZone.addEventListener('mousemove', (event) => {
  if (event.target.className !== 'sliderPanel'
    && event.target.className !== 'labelDot'
    && event.target.className !== 'searchPanel'
    && event.target.className !== 'searchQueryInput'
    && event.target.className !== 'buttonSearch') {
    if (event.which === 1) {
      const drive = document.querySelectorAll('.content');
      shift = touchstartX - event.clientX;
      if (Math.abs(shift) > 50) {
        if (shift < 0 && storageInf.activeSlide !== 1) {
          drive[storageInf.activeSlide - 1].style.left = `${-shift}px`;
          storageInf.prevActiveSlide = storageInf.activeSlide;
        }
        if (shift > 0 && storageInf.activeSlide !== storageInf.totalPoint) {
          drive[storageInf.activeSlide - 1].style.left = `-${shift}px`;
          storageInf.prevActiveSlide = storageInf.activeSlide;
        }
      }
    }
  }
}, false);

/* touchend */
gesuredZone.addEventListener('mouseup', (event) => {
  if (event.target.className !== 'sliderPanel'
    && event.target.className !== 'labelDot'
    && event.target.className !== 'searchPanel'
    && event.target.className !== 'searchQueryInput'
    && event.target.className !== 'buttonSearch') {
    const drive = document.querySelectorAll('.content');
    touchendX = event.screenX;
    storageInf = handleGesure(storageInf);
    touchstartX = 0;
    touchendX = 0;
    if (shift > 0) {
      drive[storageInf.activeSlide - 1].classList.add('leaving1');
    } else drive[storageInf.activeSlide - 1].classList.add('leaving2');
    shift = 0;
    for (let i = 0; i < drive.length; i++) {
      drive[i].style.left = '0px';
    }
  }
}, false);

function handleGesure(object) {
  const obj = object;
  let posit = obj.activeSlide;
  if (touchendX < touchstartX) {
    if (posit < obj.totalPoint) {
      posit += 1;
      setActiveSlide(posit, obj);
    }
  }
  if (touchendX > touchstartX) {
    if (posit > 1) {
      posit -= 1;
      setActiveSlide(posit, obj);
    }
  }
  obj.activeSlide = posit;
  return obj;
}

// let initialPoint;
// let finalPoint;
// document.addEventListener('touchstart', (event) => {
//   event.preventDefault();
//   event.stopPropagation();
//   initialPoint = event.changedTouches[0];
// }, false);
// document.addEventListener('touchend', (event) => {
//   event.preventDefault();
//   event.stopPropagation();
//   finalPoint = event.changedTouches[0];
//   const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
//   const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);
//   if (xAbs > 20 || yAbs > 20) {
//     if (xAbs > yAbs) {
//       if (finalPoint.pageX < initialPoint.pageX) {
//         /* СВАЙП ВЛЕВО */
//         storageInf.activeSlide += 1;
//         setActiveSlide(storageInf.activeSlide, storageInf);
//       } else {
//         /* СВАЙП ВПРАВО */
//         storageInf.activeSlide -= 1;
//         setActiveSlide(storageInf.activeSlide, storageInf);
//       }
//     }
//   }
// }, false);
