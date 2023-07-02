const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');
const { createOneApplication, updateOneApplication, deleteOneApplication, findAllApplications,findOneApplication } = require('../controller/application');
const { routeAction } = require('../utils/common');
const { applicationValidator } = require('../utils/validators');


router.post('/create', routeAction(createOneApplication, [],applicationValidator));
router.delete('/delete/:id', routeAction(deleteOneApplication,[]));
router.get('/all', routeAction(findAllApplications,[]));
router.get('/get/:id', routeAction(findOneApplication,[]));

module.exports = router;