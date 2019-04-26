const movie = new Movie();
const ui = new UI();
const dropdownMenu = document.querySelector(".custom-select");
const searchMovie = $("#searchMovie");
const areaID = [];
movie.getAreas().then(data => {
  const theaters = data.querySelectorAll("Name");
  const ids = data.querySelectorAll("ID");
  for (let index = 0; index < ids.length; index++) {
    areaID.push(ids[index].innerHTML);
  }
  theaters.forEach(theaterr => {
    const theater = document.createElement("option");
    theater.className = "dropdown-item";
    theater.innerHTML = theaterr.innerHTML;
    dropdownMenu.appendChild(theater);
  });
}).catch(err => console.log(err));
dropdownMenu.addEventListener("change", () => {
  ui.clearInput();
  ui.clearShows();
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
      const imgURL = shows[index].querySelector("EventLargeImageLandscape")
        .innerHTML;
        const imgURLSmall = shows[index].querySelector("EventSmallImagePortrait")
        .innerHTML;
      const title = shows[index].querySelector("Title").innerHTML.toUpperCase();
      const originalTitle = shows[index].querySelector("OriginalTitle").innerHTML;
      const theater = shows[index].querySelector("TheatreAndAuditorium").innerHTML;
      const time = shows[index].querySelector("dttmShowStart").innerHTML;
      const showStart = new Date(time);
      let timeNow = new Date();
      const lengthInMinutes = shows[index].querySelector("LengthInMinutes").innerHTML;
      const showUrl =shows[index].querySelector("ShowURL").innerHTML;
      const ratingUrl = shows[index].querySelector('RatingImageUrl').innerHTML;
      const genres = shows[index].querySelector('Genres').innerHTML;
      if (showStart >= timeNow) {
        object.push({
          imgURL: imgURL,
          imgSmall: imgURLSmall,
          title: title,
          theater: theater,
          start: showStart,
          lengthInMinutes: lengthInMinutes,
          originalTitle: originalTitle,
          url : showUrl,
          ratingUrl: ratingUrl,
          genre: genres 
        });
      }
    }
    ui.showMovies(object);
    ui.clearInput();
  });
});
searchMovie.on("keyup", e => {
  if (e.target.value !== '') {
    movie.getshows(movie.cityDefaultID).then(data => {
      const shows = data.querySelectorAll("Show");
      const object = [];

      try {
        for (let index = 0; index < shows.length; index++) {
          const imgURL = shows[index].querySelector("EventLargeImageLandscape")
          .innerHTML;
          const imgURLSmall = shows[index].querySelector("EventSmallImagePortrait")
          .innerHTML;
          const title = shows[index].querySelector("Title").innerHTML.toUpperCase();
          const originalTitle = shows[index].querySelector("OriginalTitle").innerHTML;
          const theater = shows[index].querySelector("TheatreAndAuditorium")
            .innerHTML;
          const time = shows[index].querySelector("dttmShowStart").innerHTML;
          const showStart = new Date(time);
          const lengthInMinutes = shows[index].querySelector("LengthInMinutes").innerHTML;
          const showUrl =shows[index].querySelector("ShowURL").innerHTML;
          const genres = shows[index].querySelector('Genres').innerHTML;
          const ratingUrl = shows[index].querySelector('RatingImageUrl').innerHTML;
  
          let value = e.target.value.toUpperCase();
          let timeNow = new Date();
       
          if (title.includes(value) && showStart >= timeNow) {
            object.push({
              imgURL: imgURL,
              imgSmall: imgURLSmall,
              title: title,
              theater: theater,
              start: showStart,
              lengthInMinutes: lengthInMinutes,
              originalTitle: originalTitle,
              url: showUrl,
              ratingUrl: ratingUrl,
              genre: genres 
            });
          }
        }
      } catch (error) {
        console.log(error);
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

$('#output').click(function() {
  $(this).find('th').on('click', function(e) {
    $( this ).find('.info').fadeToggle(1000);
    e.stopPropagation();
  })
  
});

$('#day').on('change', function() {
  ui.clearInput();
  ui.clearShows();
  if ($(this).val() == 'This day') {
    movie.changeDay(0);
    this.selectedDay =$('#day').val();
  } else if ($(this).val() == '+1') {
    movie.changeDay(1);
  } else if ($(this).val() == '+2') {
    movie.changeDay(2);
  } else if ($(this).val() == '+3') {
    movie.changeDay(3);
  }
});