const axios = require('axios');
const {Country} = require('../db')

class CountryService {

  constructor(){

  }

  /* All countries */
  async find () {

    const countries = await axios.get('https://restcountries.com/v3/all')

    const info = countries.data.map((country) => {

      return {
        code : country.cca3,
        name : country.name.common,
        officialName : country.name.official,
        continent : country.continents,
        flag : country.flags[1],
        capital : country.capital, 
        subregion : country.subregion,
        extension : country.area,
        population : country.population,
      }
 
    })

    for (const country of info) {
      try {
        const createdCountry = await Country.create(country);
        console.log('Created country:', createdCountry.toJSON());
      } catch (error) {
        console.error('Error creating country:', error);
      }
    }

    const response = info

    return response
  }

}

module.exports = CountryService;



/* 
            code: country.code,
            name: country.commonName,
            officialName: country.officialName,
            continent: country.continent,
            flag: country.flag,
            capital: country.capital,
            subregion: country.subregion,
            extension: country.area,
            population: country.population,
*/