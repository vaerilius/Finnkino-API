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
  }
  showMovies(shows) {
    let output = ` <h3>Click picture and get info</h3> `;
    let sum = 0;
    shows.forEach(show=> {
     sum++;
      output += `
      <div class="row pt-3">
        <th id="${sum }">
          <img class=" rounded" src="${show.imgURL}" style="width: 33rem;">
          <h4 class="card-title text-center text-white font-weight-bold mt-2" > ${show.originalTitle}</h4>
            <div class="card info bg-transparent " style="width: 33rem; display:none;">
              <div class="card-body ">
                <h5 class=" text-white-50 " >${show.genre}   <img  src="${show.ratingUrl}"  class="card-img-top m-1" style="width: 2rem;></h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item text-white bg-transparent">Theather:</a> ${show.theater}</li>
                <li class="list-group-item text-white bg-transparent">Start: ${show.start.getHours() + ":" + show.start.getMinutes() + " / " + show.start.getDate() + "." + show.start.getMonth() + "." + show.start.getUTCFullYear()}</li>
                <li class="list-group-item text-white bg-transparent">Length: ${show.lengthInMinutes} Minutes</li>
                <li class="list-group-item text-white bg-transparent text-center mx-auto"><p>Buy now!</p> <br><a href="${show.url}"> <img class="" src="${show.imgSmall}"  style="width: 10rem;></a></li>
             </ul>
          </div>
      </div>
        `;
    });
    this.output.innerHTML = output;
  }
}
