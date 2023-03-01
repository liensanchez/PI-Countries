const {Activity} = require('../db')

class ActivityService {

  constructor(){

  }

  async create ({id, name, difficulty, duration, country, season}) {

    const creation = await Activity.create({
      id: id,
      name: name,
      difficulty: difficulty,
      duration: duration,
      country: country,
      season: season
    })

    return { creation }
  }
  
}

module.exports = ActivityService