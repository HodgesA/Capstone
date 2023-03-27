
const apiKey = "128a453cceb924f2d5f79cc91f458043";
const baseURL = "https://api.themoviedb.org/3/movie/popular?api_key=";
const searchUrl ="https://api.themoviedb.org/3/search/movie?api_key=128a453cceb924f2d5f79cc91f458043&query=";
const imgBaseURL = "http://image.tmdb.org/t/p/w500";

const now_playing = "https://api.themoviedb.org/3/movie/now_playing?api_key=";
 const topRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=";
 const upcoming ="https://api.themoviedb.org/3/movie/upcoming?api_key=";
let data;



//All popular movie API
axios.get(`${baseURL}${apiKey}`).then((res) => {
  data = res.data.results;
  data.map((item) => {
   // Movie(item.poster_path, item.id);

    Movie(item.poster_path, item.id, item.title,item.vote_average);

  });
});

//All now playing movie 
axios.get(`${now_playing}${apiKey}`).then((res) => {
  data = res.data.results;
  data.map((item) => {
    //nowPlayingMovie(item.poster_path, item.id);

    nowPlayingMovie(item.poster_path, item.id);

  });
});


//All top rated movie 
axios.get(`${topRated}${apiKey}`).then((res) => {
  data = res.data.results;
  data.map((item) => {
   topRatedMovie(item.poster_path, item.id);
  });
});

//All upcoming movie 
axios.get(`${upcoming}${apiKey}`).then((res) => {
  data = res.data.results;
  data.map((item) => {
  upcomingMovie(item.poster_path, item.id);
  });
});

//movies in grid like
function Movie(poster_path, id,title, vote_average) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const h4 = document.createElement("h4");
  h4.textContent = vote_average;

 

  const list = document.querySelector(".movie_list");
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(h4);

  list.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
      "detail.html?movieId=" + id;
  });
}
/*
function Movie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const list = document.querySelector(".movie_list");
  div.appendChild(img);
  list.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
      "detail.html?movieId=" + id;
  });
}
*/
//all now playing movies in grid like
function nowPlayingMovie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  
  const list = document.querySelector(".movie_list1");
  div.appendChild(img);
  list.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
      "detail.html?movieId=" + id;
  });
}

//all top rated movie in grid like
function topRatedMovie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const list = document.querySelector(".movie_list2");
  div.appendChild(img);
  list.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
      "detail.html?movieId=" + id;
  });
}
//all upcoming movies in grid like
function upcomingMovie(poster_path, id) {
  const div = document.createElement("div");
  div.classList.add("grid-item");

  const img = document.createElement("img");
  img.src = `${imgBaseURL}${poster_path}`;

  const list = document.querySelector(".movie_list3");
  div.appendChild(img);
  list.appendChild(div);

  div.setAttribute("id", id);
  let red = document.getElementById(id);

  red.addEventListener("click", () => {
    window.location =
      "detail.html?movieId=" + id;
  });
}




function searchMovies() {
  document.getElementById("movies").innerHTML = "";
  let search = document.querySelector("#search").value;

  //Search for movies API
  axios.get(`${searchUrl}${search}`).then((res) => {
    data = res.data.results;
    data.map((item) => {
      Movie(item.poster_path, item.id);


    });
  });
}

//for now playing html page
function searchMovies_now_playing() {
  document.getElementById("movies_now_playing").innerHTML = "";
  let search = document.querySelector("#search_now_playing").value;

  //Search for movies API
  axios.get(`${searchUrl}${search}`).then((res) => {
    data = res.data.results;
    data.map((item) => {
      nowPlayingMovie(item.poster_path, item.id);


    });
  });
}

//for top rated html page
function searchMovies_top_rated() {
  document.getElementById("movies_top_rated").innerHTML = "";
  let search = document.querySelector("#search_top_rated").value;

  //Search for movies API
  axios.get(`${searchUrl}${search}`).then((res) => {
    data = res.data.results;
    data.map((item) => {
      topRatedMovie(item.poster_path, item.id);

    });
  });
}

//for upcoming html page
function searchMovies_upcoming() {
  document.getElementById("movies_upcoming").innerHTML = "";
  let search = document.querySelector("#search_upcoming").value;

  //Search for movies API
  axios.get(`${searchUrl}${search}`).then((res) => {
    data = res.data.results;
    data.map((item) => {
      upcomingMovie(item.poster_path, item.id);


    });
  });
}