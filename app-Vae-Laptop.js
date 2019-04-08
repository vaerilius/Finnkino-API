const movie = new Movie();
const ui = new UI();

const dropdownMenu = document.querySelector(".custom-select");
const searchMovie = $("#searchMovie");
const areaID = [];


movie.getAreas().then(data => {
  const theaters = data.querySelectorAll("Name");
  const ids = data.querySelectorAll("ID");

  for (let index = 0; index < ids.length; index++) {
    const id = ids[index].innerHTML;

    areaID.push(id);
  }

  theaters.forEach(element => {
    const theater = document.createElement("option");
    theater.className = "dropdown-item";
    theater.innerHTML = element.innerHTML;
    dropdownMenu.appendChild(theater);
  });
});

dropdownMenu.addEventListener("change", () => {
  ui.clearInput();
  let selectedTheater = $(".form-group select.custom-select").children("option:selected").val();
  for (let index = 0; index < dropdownMenu.length; index++) {
    if (dropdownMenu[index].innerHTML === selectedTheater) {
      movie.changeTheatreArea(areaID[index]);
    }
  }

  movie.getshows(movie.cityDefaultID).then(data => {
    const shows = data.querySelectorAll("Show");
    const object = [];

    for (let index = 0; index < shows.length; index++) {
      const imgURL = shows[index].querySelector("EventLargeImagePortrait")
        .innerHTML;
      const title = shows[index].querySelector("Title").innerHTML.toUpperCase();
      const originalTitle = shows[index].querySelector("OriginalTitle").innerHTML;
      const theater = shows[index].querySelector("TheatreAndAuditorium").innerHTML;
      const time = shows[index].querySelector("dttmShowStart").innerHTML;
      const lengthInMinutes = shows[index].querySelector("LengthInMinutes").innerHTML;
      const showUrl =shows[index].querySelector("ShowURL").innerHTML;
     
      object.push({
        imgURL: imgURL,
        title: title,
        theater: theater,
        start: time,
        lengthInMinutes: lengthInMinutes,
        originalTitle: originalTitle,
        url : showUrl
      });
    }
    ui.showMovies(object);
    searchMovie.innerHTML = '';
  });
});

searchMovie.on("keyup", e => {
  if (e.target.value !== '') {
    movie.getshows(movie.cityDefaultID).then(data => {

      const shows = data.querySelectorAll("Show");
      const object = [];

      for (let index = 0; index < shows.length; index++) {
        const imgURL = shows[index].querySelector("EventLargeImagePortrait")
          .innerHTML;

        const title = shows[index].querySelector("Title").innerHTML.toUpperCase();
        const originalTitle = shows[index].querySelector("OriginalTitle").innerHTML;
        const theater = shows[index].querySelector("TheatreAndAuditorium")
          .innerHTML;
        const time = shows[index].querySelector("dttmShowStart").innerHTML;
        const lengthInMinutes = shows[index].querySelector("LengthInMinutes").innerHTML;
        const showUrl =shows[index].querySelector("ShowURL").innerHTML;

        let value = e.target.value.toUpperCase();
        if (title.includes(value)) {
          object.push({
            imgURL: imgURL,
            title: title,
            theater: theater,
            start: time,
            lengthInMinutes: lengthInMinutes,
            originalTitle: originalTitle,
            url: showUrl
          });
        }
      }
      if (e.which === 13) {
        ui.showMovies(object);
        ui.clearInput();
      }
    });

  } else {
    ui.clearShows();
  }

});
$( "#output" ).click(function() {
  $( this ).animate({
    opacity: 0.25,
    left: "+=50",
    height: "toggle"
  }, 5000, function() {
    // Animation complete.
  });
});
