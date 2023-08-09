const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');
const { createOneProfile, updateOneProfile, deleteOneProfile, findAllProfiles } = require('../controller/profile');
const { routeAction } = require('../utils/common');
const { profileValidator} = require('../utils/validators');


router.post('/create', routeAction(createOneProfile, [],profileValidator));
router.put('/update/:id', routeAction(updateOneProfile,[]));
router.delete('/delete/:id', routeAction(deleteOneProfile,[]));
router.get('/all', routeAction(findAllProfiles,[]));

module.exports = router;