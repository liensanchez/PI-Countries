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

    //checkeamos si estan completos y sino los completamos

    let countriesComplete = []

    for (let i = 0; i < info.length; i++){

      if(info[i].code && info[i].capital){
        countriesComplete.push(info[i])
      } else if (!info[i].capital) {
        info[i].capital= info[i].officialName
        countriesComplete.push(info[i])
      } else if (!info[i].code) {
        info[i].code='NOI'
        countriesComplete.push(info[i])
      } 

    }

    const create = await Promise.all(countriesComplete.map((country) => {

      return Country.create({
        code: country.code,
        name: country.commonName,
        officialName: country.officialName,
        continent: country.continent,
        flag: country.flag,
        capital: country.capital,
        subregion: country.subregion,
        extension: country.area,
        population: country.population
      });
    
    }));

    const response = await Country.findAll() 

    return response
  }

}

module.exports = CountryService;