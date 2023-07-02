const { deleteApplication } = require("../model/application");
const { getApplication } = require("../model/application");
const { findApplications } = require("../model/application");
const { createApplication } = require("../model/application");



const createOneApplication = async (req, res) => {
    try {
        let application = await createApplication(req.body)
        res.status(200).send(application)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}

  const deleteOneApplication = async (req, res) => {
    try {
      let application = await deleteApplication(req.params.id)
      res.status(200).send(application)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
 
  const findAllApplications = async (req, res) => {
    try {
        let applications = await findApplications({})
        res.status(200).send(applications)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}
const findOneApplication = async (req, res) => {
    try {
      let application = await getApplication(req.params.id)
      res.status(200).send(application)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };

module.exports = {
    createOneApplication,
    deleteOneApplication,
    findAllApplications,
    findOneApplication
  };
  