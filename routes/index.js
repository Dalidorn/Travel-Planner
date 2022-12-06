const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

//landing page
router.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

module.exports = router;
