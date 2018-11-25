export default function makeUrl(object, options) {
  let url;
  const obj = object;
  if (options === 1) {
    url = `https://www.googleapis.com/youtube/v3/search?key=${obj.apiKey}&type=video&part=snippet&maxResults=15&q=${obj.endpoint}`;
  }
  if (options === 2 && obj.nextPage) {
    url = `https://www.googleapis.com/youtube/v3/search?key=${obj.apiKey}&type=video&part=snippet&maxResults=15&q=${obj.endpoint}&pageToken=${obj.nextPage}`;
  }
  if (options === 3 && obj.Id) {
    url = `https://www.googleapis.com/youtube/v3/videos?key=${obj.apiKey}&id=${obj.Id}&part=snippet,statistics`;
  }
  return url;
}
