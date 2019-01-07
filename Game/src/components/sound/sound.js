
export default function playSound(sound, loop) {
  const audio = document.createElement('audio');
  audio.style.display = 'none';
  if (loop) {
    audio.setAttribute('loop', 'loop');
    audio.volume -= 0.9;
  }
  audio.setAttribute('src', sound);
  audio.autoplay = true;
  audio.onended = () => {
    audio.remove();
  };
  document.body.appendChild(audio);
}
