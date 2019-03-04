class Movie {
  constructor() {
    this.cityDefaultID = "1033";
    this.dayRaw = new Date();
    this.day = `${this.dayRaw.getDate()}.${this.dayRaw.getMonth()}.${this.dayRaw.getFullYear()}`;
  }

  async getAreas() {
    const areaResponse = await fetch(
      `https://www.finnkino.fi/xml/TheatreAreas`
    );

    const areas = await areaResponse.text();
    return new DOMParser().parseFromString(areas, "text/xml");
  }

  async changeTheatreArea(city) {
    this.cityDefaultID = city;
  }

  async getshows(cityId) {
    this.cityDefaultID = cityId;
    const shows = await fetch(
      `https://www.finnkino.fi/xml/Schedule/?area=${this.cityDefaultID}&dt=${
        this.day
      }`
    );

    const area = await shows.text();
    return new DOMParser().parseFromString(area, "text/xml");
  }
}
