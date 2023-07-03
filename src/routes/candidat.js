const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');
const { createOneCandidat, updateOneCandidat, deleteOneCandidat, findAllCandidats } = require('../controller/candidat');
const { routeAction } = require('../utils/common');
const { candidateValidator } = require('../utils/validators');

router.post('/signin', routeAction(signIn, [], signInValidator));
router.post('/signup', routeAction(signUp, [], candidateValidator));
router.post('/create', routeAction(createOneCandidat, [],candidateValidator));
router.put('/update/:id', routeAction(updateOneCandidat,[]));
router.delete('/delete/:id', routeAction(deleteOneCandidat,[]));
router.get('/all', routeAction(findAllCandidats,[]));

module.exports = router;