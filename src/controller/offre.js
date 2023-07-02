const { createOffre, updateOffre, deleteOffre, findOffres } = require("../model/offres");




const createOneOffre = async (req, res) => {
    try {
        let offre = await createOffre(req.body)
        res.status(200).send(offre)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}


  const updateOneOffre = async (req, res) => {
    try {
      console.log(req.body)
      let offre = await updateOffre(req.params.id, req.body)
      res.status(201).send(offre)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
  
  const deleteOneOffre = async (req, res) => {
    try {
      let offre = await deleteOffre(req.params.id)
      res.status(200).send(offre)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
 
  const findAllOffres = async (req, res) => {
    try {
        let offres = await findOffres({})
        res.status(200).send(offres)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}



  
  module.exports = {
    createOneOffre,
    updateOneOffre,
    deleteOneOffre,
    findAllOffres
  };
  