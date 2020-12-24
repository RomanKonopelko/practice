import css from "./styles.css";
import fetchObject from "./js/fetch.js";
import refs from "./js/refs.js";
import libs from "./js/libs.js";

const { formRef, btnRef, galleryRef } = refs;
console.log({ formRef, btnRef, galleryRef });

fetchObject.getFetch();
