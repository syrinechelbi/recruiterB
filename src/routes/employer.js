const express = require("express");
const router = express.Router();
const { createOneemployer, updateOneemployer, deleteOneemployer, findallemployers } = require("../controller/employer");
const { routeAction } = require("../utils/common");





router.post('/create', routeAction(createOneemployer, []));
router.put('/update/:id', routeAction(updateOneemployer,[]));
router.delete('/delete/:id', routeAction(deleteOneemployer,[]));
router.get('/all', routeAction(findallemployers,[]));

module.exports=router;