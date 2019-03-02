const movie = new Movie();
const ui = new UI();

const showAll = $("#searchMovie");
// const output = $('#ouput');

movie.getData().then(data => {
  // console.log(data.schedule);
  // console.log(data.areas);

  const theaters = data.areas.querySelectorAll("Name");

  const dropdownMenu = document.querySelector(".dropdown-menu");
  console.log(dropdownMenu.value);
  theaters.forEach(element => {
    const theater = document.createElement("a");
    theater.className = "dropdown-item";
    theater.innerHTML = element.innerHTML;
    dropdownMenu.appendChild(theater);
    // console.log(element);
  });
});

//rebuild this => get data from selected theater and output data imgs to  the browser
showAll.on("keyup", e => {
  movie.getData().then(data => {
    const shows = data.schedule.querySelectorAll("Show");
    const testi = [];

    for (let index = 0; index < shows.length; index++) {
      const imgURL = shows[index].querySelector("EventLargeImagePortrait")
        .innerHTML;
      const title = shows[index].querySelector("Title").innerHTML.toUpperCase();
      let value = e.target.value.toUpperCase();
      if (title.includes(value)) {
        testi.push({ imgURL: imgURL, title: title });
      }
    }

    ui.showImages(testi);
  });
});
