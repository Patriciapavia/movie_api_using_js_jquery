$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val();
    getMovie(searchText);
    e.preventDefault();
  });
});

function getMovie(searchText) {
  axios
    .get(`http://www.omdbapi.com/?s=${searchText}&apikey=5bb03fee`)
    .then((response) => {
      console.log(response);

      let movies = response.data.Search;

      let output = "";
      $.each(movies, (index, movie) => {
        output += `
              <div class= col-md-3>
                  <div class="well text-center>
                    <img src="${movie.Poster}">
                    <h5>${movie.Title} </h5>
                    <h5>${movie.Year} </h5>
                    <a onClick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>

                  </div>
              </div>
          `;
      });
      $("#movie").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(id) {
  sessionStorage.setItem("movieId", id);
  window.location = movie.html;
  return false;
}
