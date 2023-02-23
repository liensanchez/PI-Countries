const { Router, response } = require('express');
const CountryService = require('../services/countries.service');

const router = Router();
const service = new CountryService()

/* Get all countries */

router.get('/', async (req, res) => {

  try {

    const response = await service.find()

    res.status(200).send(response)
  } catch (error) {
    res.status(404).json({error: error.message})
  }
})
module.exports = router;