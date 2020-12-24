import { createClient } from "pexels";
import refs from "./refs.js";
import template from "../templates/item.hbs";

let key = "563492ad6f91700001000001ced38660aedd4f17a9fcccae5473fbb0";

const client = createClient(key);
console.log(client);

// refs.galleryRef.append(img);
// client.photos.random().then((obj) => {
//   img.src = obj.src.original;
// });

// let query = "New Zealand";
// client.photos.search({ query, per_page: 10 }).then((result) => {
//   console.log(result);
//   const images = result.photos.map((el) => {
//     const img = document.createElement("img");
//     img.width = "300";
//     img.src = el.src.original;
//     return img;
//   });
//     return images;
// //   return refs.galleryRef.append(...images);
// });

let query = "New York";
client.photos.search({ query, per_page: 10 }).then((result) => {
  const items = template(result.photos);
  refs.galleryRef.insertAdjacentHTML("afterbegin", items);
});
