const {createEmployer,
    findEmployer,
    updateEmployer,
    deleteEmployer}= require('../model/employer');


    const createOneemployer = async (req,res) =>{
        try {
            let employer = await createEmployer(req.body);
            res.status(200).send(employer);
        
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const updateOneemployer = async (req,res) =>{
        try {
            let employer =await updateEmployer(req.params.id,req.body);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const deleteOneemployer = async (req,res) =>{
        try {
            let employer =await deleteEmployer(req.param.id);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const findallemployers = async (req,res) =>{
        try {
            let employer =await findEmployer(req.body);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

          

module.exports={
    createOneemployer,
    updateOneemployer,
    deleteOneemployer,
    findallemployers
}