const express = require('express');
const router = express.Router();
// const auth = require('../middlewares/auth');
const { createOneCandidat, updateOneCandidat, deleteOneCandidat, findAllCandidats } = require('../controller/candidat');
const { routeAction } = require('../utils/common');
const { candidateValidator, signInValidatorC } = require('../utils/validators');
const { signIn, signUp } = require('../controller/candidat');

router.post('/signin', routeAction(signIn, [], signInValidatorC));
router.post('/signup', routeAction(signUp, [], candidateValidator));
router.post('/create', routeAction(createOneCandidat, [],candidateValidator));
router.put('/update/:id', routeAction(updateOneCandidat,[]));
router.delete('/delete/:id', routeAction(deleteOneCandidat,[]));
router.get('/all', routeAction(findAllCandidats,[]));

module.exports = router;