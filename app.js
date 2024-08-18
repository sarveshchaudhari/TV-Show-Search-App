const searchForm = document.querySelector("#searchForm");
const searchButton = document.querySelector("#searchButton");

searchForm.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = searchForm.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  makeImages(res.data);
});

const makeImages = (shows) => {
  const displayImages = document.querySelector(".displayImages");
  displayImages.innerHTML = "";
  for (let i of shows) {
    if (i.show.image.medium) {
      const img = document.createElement("img");
      img.src = i.show.image.medium;
      displayImages.append(img);
    }
  }
};
