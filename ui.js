class UI {
   constructor() {
      this.output =document.querySelector('#output');
   
   }

   showImages(shows){
 

      let output = `
      
      <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Finnkino Movies</h1>
          <hr class="mt-2 mb-5">
      <div class="row text-center text-lg-left">
      `;

      shows.forEach(show => {
        // console.log(show.imgURL);
      //put all into card 
        output += `
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
               
                <img class="img-fluid img-thumbnail" src="${show.imgURL}" alt="">

               
              </a>
            </div>


            <div class="col-lg-3 col-md-4 col-6">
            <ul class="list-group">
            <li class="list-group-item">Company: ${show.title} </li>
            <li class="list-group-item">Website/Blog: ${show.theater}</li>
            <li class="list-group-item">Location: ${show.title} </li>
            <li class="list-group-item">Member Since: ${show.start} </li>
          </ul>
            </div>


        `;
      });
      output += `
      </div>
      
      `;
      
     this.output.innerHTML = output;
    
     
   }
}