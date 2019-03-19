class UI {
  constructor() {
    this.output = document.querySelector("#output");
  }
  showMovies(shows) {
    let output = `
      <h1 class="display-5 text-uppercase font-weight-bold text-center">Finnkino Movies</h1>
          <hr>
          <div class="card-group">
      `;

    shows.forEach(show => {
      output += `
       <div class="col-ms-12 col-md-6 col-lg-4 col-xl-3 m-auto pb-4">
        <div class="card" style="width: 15rem;">
          <img class="card-img-top" src="${show.imgURL}" >
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${show.originalTitle}</li>
              <li class="list-group-item">${show.theater}</li>
              <li class="list-group-item">${show.start}</li>
              <li class="list-group-item">${show.lengthInMinutes} Minutes</li>
            </ul>
          </div>
         </div>
        </div>
        `;
    });

    output += `
    </div>
    `;
    this.output.innerHTML = output;
  }
}
