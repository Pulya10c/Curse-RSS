export default function makeCard(object, box) {
  const obj = object;
  if (obj.firstStart !== true && obj.downloadCard !== true) {
    const conteinerLengthChild = document.querySelector('.cardPanel').children.length;
    if (conteinerLengthChild) {
      const conteinerChildren = document.querySelector('.cardPanel').children;
      for (let i = conteinerLengthChild - 1; i >= 0; i--) {
        conteinerChildren[i].parentNode.removeChild(conteinerChildren[i]);
      }
    }
  }
  for (let i = 0; i < Math.ceil(box.length / obj.numberSlidesVisible); i++) {
    const newPanel = document.createElement('div');
    newPanel.className = 'content';
    newPanel.id = `number${i + 1}`;
    document.querySelector('.cardPanel').appendChild(newPanel);
    for (let j = 0; j < obj.numberSlidesVisible; j++) {
      if (j + i * obj.numberSlidesVisible < box.length) {
        const newCard = document.createElement('div');
        newCard.className += 'youtubeCard';
        newCard.innerHTML = `<a class="nameCard" target="_blank" href = "${box[j + i * obj.numberSlidesVisible].Idlink}" >${box[j + i * obj.numberSlidesVisible].title}</a>
        <div class="imgBGYouTube">
        <img src="${box[j + i * obj.numberSlidesVisible].url}" alt="images YouTube" class="fotoBGCard"/>
        </div>
        <div class="allInfCard">
        <span class="infoUser"><p class = 'textInfo'>${box[j + i * obj.numberSlidesVisible].user}</p></span>
        <span class="infoDate"><p class = 'textInfo'>${box[j + i * obj.numberSlidesVisible].date}</p></span>
        <span class="infoView"><p class = 'textInfo'>${box[j + i * obj.numberSlidesVisible].viewCount}</p></span>
        </div>
        <div class="descriptionCard">
        <p class="infoDscCard"> ${box[j + i * obj.numberSlidesVisible].description}</p>
        </div>`;
        document.querySelector(`#number${i + 1}`).appendChild(newCard);
      }
    }
  }
  document.querySelector(`#number${obj.activeSlide}`).className = document.querySelector(`#number${obj.activeSlide}`).className.replace('content', 'content active');
}
