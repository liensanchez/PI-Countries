const axios = require('axios');

class CountryService {

  constructor(){

  }

  /* All countries */
  async find () {

    const countries = await axios.get('https://restcountries.com/v3/all')

    const info = countries.data.map((country) => {

      return {
        commonName : country.name.common,
        officialName : country.name.official,
        continent : country.continents,
        flag : country.flags[1],
        code : country.cca3,
        capital : country.capital, 
        subregion : country.subregion,
        extension : country.area,
        population : country.population,

      }

    })

    const response = info

    return response
  }

}

module.exports = CountryService;