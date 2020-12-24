export default {
  query: "Japan",
  page: 1,
  perPage: 4,
  baseUrl: "https://api.pexels.com/v1",

  getFetch() {
    let params = `/search?query=${query}`;
    let url = this.baseUrl + params;
    let key = "563492ad6f91700001000001ced38660aedd4f17a9fcccae5473fbb0";
    let options = {
      method: "GET",
      headers: {
        Authorization: key,
      },
    };
    return fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data.photos;
      })
      .then((result) => {
        console.log(result);
      });
  },
};
