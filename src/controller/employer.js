const {createEmployer,
    findEmployer,
    updateEmployer,
    deleteEmployer}= require('../model/employer');


    const createOneemployer = async (req,res) =>{
        try {
            let employer = createEmployer(req.body);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const updateOneemployer = async (req,res) =>{
        try {
            let employer = updateEmployer(req.params.id,req.body);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const deleteOneemployer = async (req,res) =>{
        try {
            let employer = deleteEmployer(req.param.id);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const findallemployers = async (req,res) =>{
        try {
            let employer = findEmployer(req.body);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

          
  const allProducts = (query = {}) => {
}

module.exports={
    createOneemployer,
    updateOneemployer,
    deleteOneemployer,
    findallemployers
}