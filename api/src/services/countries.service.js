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
        continent : country.continents
      }
    })

    const response = info
    console.log(response)

    return response
  }

}

module.exports = CountryService;