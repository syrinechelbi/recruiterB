const { createProfile, findProfiles, deleteprofile, updateProfile, findProfile } = require("../model/profile");

const config = require("../config");


const createOneProfile = async (req, res) => {
    try {
        console.log("heyy");
        let profile = await createProfile(req.body)
        res.status(200).send(profile)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}


  const updateOneProfile = async (req, res) => {
    try {
      let profile = await updateProfile(req.params.id, req.body)
      res.status(201).send(profile)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
  
  const deleteOneProfile = async (req, res) => {
    try {
      let profile = await deleteprofile(req.params.id)
      res.status(200).send(profile)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
 
  const findAllProfiles = async (req, res) => {
    try {
        let profiles = await findProfiles({})
        res.status(200).send(profiles)
    } catch (error) {
        res.status(400).send({message: error.message})
    }   
}

const findOneProfile = async (req, res) => {
  try {
      let profile = await findProfile({})
      res.status(200).send(profile)
  } catch (error) {
      res.status(400).send({message: error.message})
  }   
}


 



  
  module.exports = {
    createOneProfile,
    updateOneProfile,
    deleteOneProfile,
    findAllProfiles,
    findOneProfile
 
  };
  