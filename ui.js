class UI {
  constructor() {
    this.output = document.querySelector("#output");
    this.input = $('#searchMovie');

  }
  // showMovies(shows) {
  //   let output = `
  //     <h1 class="display-5 text-uppercase font-weight-bold text-center pt-3">Finnkino Movies</h1>
  //         <hr>
  //         <div class="card-group d-flex justify-content-around">
  //     `;

  //   shows.forEach(show => {
  //     output += `
  //      <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 px-md-3 bg-transparent ">
  //       <div class="card mx-auto p-3 pb-4 bg-transparent border-0" style="width: 17rem;">
  //       <div class="card-title mx-auto text-center bg-white border border-dark rounded p-2"><h5 class="display-5">${show.title}</h5>

  //         <img class="card-img-top rounded" src="${show.imgURL}" >
  //         <div class="card-body">
  //           <ul class="list-group list-group-flush">
  //             <li class="list-group-item rounded"><h5 class="display-5">${show.theater}</h5></li>
  //             <li class="list-group-item rounded">${show.start}</li>
  //             <li class="list-group-item rounded">${show.lengthInMinutes} Minutes</li>
  //             <li class="list-group-item rounded"><a href="${show.url}" class="card-link">Buy</a> </li>

  //           </ul>
  //           </div>
  //         </div>
  //        </div>
  //       </div>
  //       `;
  //   });



  //   output += `
  //   </div>
  //   `;
  //     this.output.innerHTML = output;
  // }
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
 
      <tbody>
        <tr class="shadow-lg p-3 mb-5 rounded">
          <th scope="row"> <img class=" rounded" src="${show.imgURL}" style="width: 14rem;"></th>
          <th scope="row"> <img src="${show.ratingUrl}" ></th>
          <td>
                   <ul class="list-group list-group-flush m-2 p-2 bg-transparent ">
                  
                   <li class="text-white list-group-item bg-transparent table-responsive text-lg-2"><a class="font-weight-bold">Title: </a> ${show.originalTitle}</li>
                   <li class="text-white list-group-item bg-transparent"><a class="font-weight-bold">Theather:</a> ${show.theater}</li>
                   <li class="text-white list-group-item bg-transparent"><a class="font-weight-bold">Start:</a> ${show.start}</li>
                   <li class="text-white list-group-item bg-transparent"><a class="font-weight-bold">Length: </a> ${show.lengthInMinutes}</li>
                   <li class="text-white list-group-item bg-transparent">  <p class="lead">
                   <a class="btn btn-primary btn-lg" href="${show.url}" role="button">Buy Now!</a>
                 </p></li>
     
                   </ul>
          </td>
        </tr>
        </tbody>
        `;
    });



    // output += `
    // </tbody>
   
    // `;
    this.output.innerHTML = output;
  }

}
