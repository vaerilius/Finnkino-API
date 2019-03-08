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
  for (let index = 0; index < dropdownMenu.length; index++) {
    if (
      dropdownMenu[index].innerHTML ===
      $(".form-group select.custom-select")
        .children("option:selected")
        .val()
    ) {
      movie.changeTheatreArea(areaID[index]);
    }
  }

  
  // console.log(movie);
  movie.getshows(movie.cityDefaultID).then(data => {
    const shows = data.querySelectorAll("Show");
    const object = [];

    for (let index = 0; index < shows.length; index++) {
      // console.log(shows[index]);
      const imgURL = shows[index].querySelector("EventLargeImagePortrait")
        .innerHTML;
      const title = shows[index].querySelector("Title").innerHTML.toUpperCase();

      const theater = shows[index].querySelector("TheatreAndAuditorium").innerHTML;
      const time = shows[index].querySelector("dttmShowStart").innerHTML;
      const lengthInMinutes = shows[index].querySelector("LengthInMinutes").innerHTML;
      
      object.push({
        imgURL: imgURL,
        title: title,
        theater: theater,
        start: time,
        lengthInMinutes: lengthInMinutes
      });
    }

    ui.showMovies(object);
  });
});

searchMovie.on("keyup", e => {
  movie.getshows(movie.cityDefaultID).then(data => {
    const shows = data.querySelectorAll("Show");
    const object = [];
    // console.log(data);
    for (let index = 0; index < shows.length; index++) {
      const imgURL = shows[index].querySelector("EventLargeImagePortrait")
        .innerHTML;
      
      const title = shows[index].querySelector("Title").innerHTML.toUpperCase();

      const theater = shows[index].querySelector("TheatreAndAuditorium")
        .innerHTML;
      const time = shows[index].querySelector("dttmShowStart").innerHTML;
      const lengthInMinutes = shows[index].querySelector("LengthInMinutes").innerHTML;
     

      let value = e.target.value.toUpperCase();
      if (title.includes(value)) {
        object.push({
          imgURL: imgURL,
          title: title,
          theater: theater,
          start: time,
          lengthInMinutes: lengthInMinutes
        });
      }
    }

    ui.showMovies(object);
  });
});
