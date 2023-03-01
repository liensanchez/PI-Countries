const { Router } = require('express')
const ActivityService = require('../services/countries.service')

const router = Router();
const service = new ActivityService()

router.post('/', async (req, res) => {

  try {

    const response = await service.get(req.query)

    res.json(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})


module.exports = router;