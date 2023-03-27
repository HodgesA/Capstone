var link = window.location.href;
var newLink = new URL(link);
const movieId = newLink.searchParams.get("movieId");

const apiKey = "128a453cceb924f2d5f79cc91f458043";
const detailMovie =
  "https://api.themoviedb.org/3/movie/" +
  movieId +
  "?api_key=" +
  apiKey +
  "&language=en-US";
const relatedUrl =
  "https://api.themoviedb.org/3/movie/" +
  movieId +
  "/similar?api_key=" +
  apiKey +
  "&language=en-US&page=1";
const imgBaseURL = "http://image.tmdb.org/t/p/w500";
let data;

//Movie Details API
axios.get(detailMovie).then((res) => {
  data = res.data;

  console.log(data);
  const img = document.createElement("img");
  document.getElementById("myImageID").src = `${imgBaseURL}${data.poster_path}`;
  document.getElementById("original_title").innerHTML = data.original_title;
  document.getElementById("overview").innerHTML = data.overview;
  document.getElementById("release_date").innerHTML = data.release_date;

const genres = data.genres.map((genre) => genre.name);
document.getElementById("genres").innerHTML = genres.join(", ");

document.getElementById("ratings").innerHTML = data.vote_average;


const hours = Math.floor(data.runtime / 60);
const minutes = data.runtime % 60;
document.getElementById("runtime").innerHTML = hours + 'h' + minutes + 'm';



});


//Movie Related Movie API
axios.get(relatedUrl).then((res) => {
  data = res.data.results;
  console.log(data);
  data.map((item) => {
    Movie(item.poster_path, item.id);
  });
});



function Movie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const grid = document.querySelector(".movie_list");


  div.appendChild(img);
  grid.appendChild(div);
 


  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
    "detail.html?movieId=" + id;
});
}