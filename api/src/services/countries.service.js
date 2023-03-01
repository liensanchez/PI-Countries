const axios = require('axios')
const { Op } = require('sequelize')
const {Country} = require('../db')

class CountryService {

  constructor(){

  }

  /* All countries */
  async getAll () {

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

      if (!country.hasOwnProperty('capital') || country.capital === null || country.capital === '') {
        country.capital = 'unknown';
      }

      try {
        const createdCountry = await Country.create(country);
      } catch (error) {
        console.error('Error creating country:', error);
      }

    }

    const response = await Country.findAll()

    return {response}
  }

  async getCountry (countryID) {

    const response = await Country.findOne({
      where: {
        id: {
          [Op.eq]: countryID
        }
      }
    })

    return {response}
  }

}

module.exports = CountryService;


