// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
//const baseUrl =
export default function imagesPromise(q, page, per_page) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${q}&page=${page}&per_page=${per_page}&key=23263056-8420dc5c89144af04b2f7ac5b`
  ).then((res) => res.json());
}

//.then( data =>{
//console.log(data);
//});
//}
