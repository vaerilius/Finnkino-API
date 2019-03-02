class Movie {
  constructor() {
    this.cityDefaultID = '1038';
    this.xml = new XMLHttpRequest();
  }

  async getData(city) {

    // if (city !=='') {
    //   this.cityDefault = city;
    // }
   
    const areaSchedule = await fetch(`https://www.finnkino.fi/xml/Schedule/?area=${this.cityDefaultID}&dt=02.03.2019`
    );
    const area = await areaSchedule.text();
    
    const cityResponse = await fetch(`https://www.finnkino.fi/xml/TheatreAreas`);

    const scheduleSchedule = await cityResponse.text();

   

    const areas = new DOMParser().parseFromString(scheduleSchedule, "text/xml");
    const schedule = new DOMParser().parseFromString(area, "text/xml");
    return {
      schedule,
      areas
    };
  }

}
