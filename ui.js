class UI {
  constructor() {
    this.output = document.querySelector("#output");
    this.input = $('#searchMovie');

  }
  clearShows() {
    this.output.innerHTML = '';
  }
  clearInput() {
    $(this.input).val('');
    this.input.innerHTML = '';
  }
  showMovies(shows) {
    let output = ` `;

    shows.forEach(show => {
      output += `
    
      <div class="row">
        <th>
          <div class="col-ms-12 col-md-6 col-lg-4 mt-3" >
            <img class=" rounded" src="${show.imgURL}" style="width: 25rem;">
            <h4 class="card-title text-white font-weight-bold mt-2" > ${show.originalTitle}</h4>
          </div>
          <div class="col-ms-12 col-md-6 col-lg-4">
            <div class="card info bg-transparent " style="width: 25rem; display:none;">
              <div class="card-body ">
                <h5 class=" text-white-50 " >${show.genre} </h5>
                <img  src="${show.ratingUrl}"  class="card-img-top" style="width: 3rem;>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-transparent">Theather:</a> ${show.theater}</li>
                <li class="list-group-item text-white bg-transparent">Start: ${show.start.getHours() + ":" + show.start.getMinutes() + " / " + show.start.getDate() + "." + show.start.getMonth() + "." + show.start.getUTCFullYear()}</li>
                <li class="list-group-item text-white bg-transparent">Length: ${show.lengthInMinutes} Minutes</li>
                <li class="list-group-item text-white bg-transparent text-center mx-auto"><p>Buy now!</p> <br><a href="${show.url}"> <img class="" src="${show.imgSmall}"  style="width: 10rem;></a></li>
             </ul>
          </div>
        </div>
      </div>
        `;
    });

    this.output.innerHTML = output;
  }
}
