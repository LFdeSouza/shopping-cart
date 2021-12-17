const printProducts = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((json) => console.log(json));
};

export default printProducts;
