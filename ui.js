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
      
        output += `
            <div class="col-lg-3 col-md-4 col-6">
              <a href="#" class="d-block mb-4 h-100">
               
                <img class="img-fluid img-thumbnail" src="${show.imgURL}" alt="">
                <figcaption class="figure-caption">${show.title}</figcaption>
              </a>
            </div>

        `;
      });
      output += `
      </div>
      
      `;
      
     this.output.innerHTML = output;
    
     
   }
}