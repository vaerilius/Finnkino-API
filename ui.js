class UI {
  constructor() {
    this.output = document.querySelector("#output");
  }
  showMovies(shows) {
    let output = `
      <h1 class="display-5 text-uppercase font-weight-bold text-center pt-3">Finnkino Movies</h1>
          <hr>
          <div class="card-group d-flex justify-content-around">
      `;

    shows.forEach(show => {
      output += `
       <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 px-md-3 bg-transparent ">
        <div class="card mx-auto p-3 pb-4 bg-transparent border-0" style="width: 17rem;">
        <div class="card-title mx-auto text-center bg-white border border-dark rounded p-2"><h4 class="display-5">${show.originalTitle}</h4>
          <img class="card-img-top rounded" src="${show.imgURL}" >
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li class="list-group-item rounded"><h5 class="display-5">${show.theater}</h5></li>
              <li class="list-group-item rounded">${show.start}</li>
              <li class="list-group-item rounded">${show.lengthInMinutes} Minutes</li>
            </ul>
            </div>
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
