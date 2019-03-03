class Movie {
  constructor() {
    this.cityDefaultID = '1033';
    // this.day = new Date();
    // // console.log(this.day);
    // this.xml = new XMLHttpRequest();
  }

  async getAreas() {

    const cityResponse = await fetch(`https://www.finnkino.fi/xml/TheatreAreas`);

    const scheduleSchedule = await cityResponse.text();

    const areas = new DOMParser().parseFromString(scheduleSchedule, "text/xml");

    return  areas;
  }


  async changeTheatreArea(city) {
    this.cityDefaultID = city;
  }
  
  async getshows(cityId) {
    this.cityDefaultID = cityId;
    const areaSchedule = await fetch(`https://www.finnkino.fi/xml/Schedule/?area=${this.cityDefaultID}&dt=03.03.2019`);
    const area = await areaSchedule.text();
  
    const schedule = new DOMParser().parseFromString(area, "text/xml");
    return schedule;
  }



}
