const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');
const { createOneOffre, updateOneOffre, deleteOneOffre, findAllOffres } = require('../controller/offre');
const { routeAction } = require('../utils/common');
const { offreValidator } = require('../utils/validators');


router.post('/create', routeAction(createOneOffre, []),offreValidator);
router.put('/update/:id', routeAction(updateOneOffre,[]));
router.delete('/delete/:id', routeAction(deleteOneOffre,[]));
router.get('/all', routeAction(findAllOffres,[]));

module.exports = router;