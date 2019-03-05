class UI {
  constructor() {
    this.output = document.querySelector("#output");
  }

  showMovies(shows) {

    let output = `
      
      <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Finnkino Movies</h1>
          <hr class="mt-2 mb-5">
   
      `;

    shows.forEach(show => {

      output += `

      <div class="card card-body m-1">
      <div class="row">
        <div class="col-md-3">
        <img class="img-fluid img-thumbnail" src="${show.imgURL}" alt="">    
   
          
        </div>
      
        <div class="col-md-9">
        <ul class="list-group">
        <li class="list-group-item">Title: ${show.title} </li>
        <li class="list-group-item">Theater: ${show.theater}</li>
        <li class="list-group-item">Start: ${show.start} </li>
        <li class="list-group-item">Length: ${show.lengthInMinutes} Minutes </li>
        </ul>
        </div>
      </div>
    </div>

        `;
    });


    this.output.innerHTML = output;
  }
}
