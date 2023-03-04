const {Activity} = require('../db')

class ActivityService {

  constructor(){

  }

  async create ({name, difficulty, duration, country_code, season}) {

    const creation = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      country_code: country_code,
      season: season
    })

    return { creation }
  }
  
}

module.exports = ActivityService