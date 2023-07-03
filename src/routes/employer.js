const express = require("express");
const router = express.Router();
const { routeAction } = require("../utils/common");
const { signInValidatorE, employerValidator } = require("../utils/validators");
const { signUp, createOneemployer, updateOneemployer, deleteOneemployer, findallemployers, signIn } = require("../controller/employer");

router.post('/signin', routeAction(signIn, [], signInValidatorE));
router.post('/signup', routeAction(signUp, [], employerValidator));
router.post('/create', routeAction(createOneemployer, [],employerValidator));
router.put('/update/:id', routeAction(updateOneemployer,[]));
router.delete('/delete/:id', routeAction(deleteOneemployer,[]));
router.get('/all', routeAction(findallemployers,[]));

module.exports=router;

