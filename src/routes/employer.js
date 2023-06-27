const express = require("express");
const router = express.router();
const {createEmployer, findallemployers, updateEmployer, deleteEmployer }= require('/controller/employer');
const { createOneemployer, updateOneemployer, deleteOneemployer } = require("../controller/employer");





router.post('/create', routeAction(createOneemployer, []));
router.put('/update/:id', routeAction(updateOneemployer,[]));
router.delete('/delete/:id', routeAction(deleteOneemployer,[]));
router.get('/all', routeAction(findallemployers,[]));