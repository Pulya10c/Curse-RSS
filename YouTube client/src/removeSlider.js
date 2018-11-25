export default function removeSlider(object) {
  const obj = object;
  if (obj.playStart !== true) {
    if (document.querySelector('.wrapperSlider')) {
      document.querySelector('.wrapperSlider').remove();
    }
  }
}
