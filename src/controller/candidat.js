const { createCandidate } = require("../model/candidat");

const createOneCandidat = async (req, res) => {
    try {
      console.log(req.body.firstName)
        let candidat = await createCandidate(req.body)
        res.status(200).send(candidat)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
  
  const updateOneCandidat = async (req, res) => {
// Update houni
  };
  
  const deleteOneCandidat = async (req, res) => {
    // Delete Houniiii
  };
  
  const findAllCandidats = async (req, res) => {
    // Get all hounii
  };
  
  module.exports = {
    createOneCandidat,
    updateOneCandidat,
    deleteOneCandidat,
    findAllCandidats
  };
  