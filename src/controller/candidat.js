const { createCandidate, findCandidates, deletecandidat, updateCandidat } = require("../model/candidat");


const createOneCandidat = async (req, res) => {
    try {
        let candidat = await createCandidate(req.body)
        res.status(200).send(candidat)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}


  const updateOneCandidat = async (req, res) => {
    try {
      console.log(req.body)
      let candidat = await updateCandidat(req.params.id, req.body)
      res.status(201).send(candidat)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
  
  const deleteOneCandidat = async (req, res) => {
    try {
      let candidat = await deletecandidat(req.params.id)
      res.status(200).send(candidat)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
 
  const findAllCandidats = async (req, res) => {
    try {
        let candidats = await findCandidates(req.body)
        res.status(200).send(candidats)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

  const allProducts = (query = {}) => {
}

  
  module.exports = {
    createOneCandidat,
    updateOneCandidat,
    deleteOneCandidat,
    findAllCandidats
  };
  