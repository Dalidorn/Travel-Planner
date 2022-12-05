const router = require('express').Router();
const Traveller = require('../../models/Traveller');

// GET all travellers
router.get('/', async (req, res) => {
  try {
    const travellerData = await Traveller.findAll()
    res.status(200).json(travellerData);
  } catch {
    res.status(500).json(err);
  }
});

// GET a traveller
router.get('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.findByPk(req.params.id);
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller with this id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//POST to create a new traveller
router.post('/', async (req, res) => {
  try {
    const travellerData = await Traveller.create(req.body);
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a traveller
router.put('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!travellerData[0]) {
      res.status(404).json({ message: 'No traveller with this id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// DELETE a traveller
router.delete('/:id', async (req, res) => {
  try {
    const travellerData = await Traveller.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!travellerData) {
      res.status(404).json({ message: 'No traveller with this id!' });
      return;
    }
    res.status(200).json(travellerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
