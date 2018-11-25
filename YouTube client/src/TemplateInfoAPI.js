export default function TemplateInfoAPI(object) {
  const obj = object;
  function SearchInfoValue(item) {
    const ObjectInf = {};
    ObjectInf.user = item.snippet.channelTitle;
    ObjectInf.url = item.snippet.thumbnails.medium.url;
    ObjectInf.description = item.snippet.description;
    ObjectInf.title = item.snippet.title;
    ObjectInf.viewCount = item.statistics.viewCount;
    ObjectInf.date = item.snippet.publishedAt.substring(0, item.snippet.publishedAt.indexOf('T'));
    ObjectInf.Idlink = `https://www.youtube.com/watch?v=${item.id}`;
    return ObjectInf;
  }
  const result = obj.items.map(SearchInfoValue);
  return result || alert('Sorry, can\'t API YouTube response data');
}
