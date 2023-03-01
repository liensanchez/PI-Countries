const { Router } = require('express')
const ActivityService = require('../services/activities.service')

const router = Router();
const service = new ActivityService()

router.post('/', async (req, res) => {

  try {

    const body = req.body

    const cretedActivity = await service.create(body)

    res.json(cretedActivity)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})


module.exports = router;