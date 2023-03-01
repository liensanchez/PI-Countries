const { Router } = require('express')
const CountryService = require('../services/countries.service')

const router = Router();
const service = new CountryService()

/* Get all countries */

router.get('/', async (req, res) => {

  try {

    const response = await service.get(req.query)

    res.json(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})


router.get('/:countryID', async (req, res) => {

  try {

    const {countryID} = req.params

    const response = await service.getCountry(countryID)

    res.json(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})



module.exports = router;