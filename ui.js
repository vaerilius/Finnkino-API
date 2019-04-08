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
        <tr>
          <th scope="row"> <img class="card-img-top rounded" src="${show.imgURL}" ></th>
          <td>
                   <ul class="list-group list-group-flush ">
                   <li class=""><h5 class="display-5 ">${show.originalTitle}</h5></li>
                     <li ><h5 class="flex-md-display-5">${show.theater}</h5></li>
                      <li  class="text-danger">${show.start}</li>
                     <li class="text-white font-weight-bold">${show.lengthInMinutes} Minutes</li>
                     <li ><a href="${show.url}" class="card-link bg-rimary">Buy</a> </li>
        
                   </ul>
          </td>
        </tr>
        `;
    });



    output += `
    </tbody>
   
    `;
    this.output.innerHTML = output;
  }

}
