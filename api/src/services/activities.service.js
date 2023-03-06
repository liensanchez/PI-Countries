const {Activity} = require('../db')
const {Country} = require('../db')

class ActivityService {

  constructor(){

  }

  async create ({name, difficulty, duration, country_code, season}) {

    const country = await Country.findByPk(
      country_code
    )

    const creation = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      country_code: country_code,
      season: season
    })

    await country.addActivity(creation) 

    return { creation, country }
  }
  
}

module.exports = ActivityService