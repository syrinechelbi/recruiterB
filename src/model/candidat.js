const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken');
const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');


const candidatSchema = new mongoose.Schema(
    {
        firstName : {type : String, default:null },
        lastName : {type : String, default:null },
        phone : {type : String, default:null },
        email : {type : String, default:null },
        password : {type : String, default:null },
        gender : {type : String, default:null },
        applications : [{type : Schema.Types.ObjectId,ref : "applications"}] 

    },
    {timestamps:true}
);

const Candidate = mongoose.model("candidates",candidatSchema);

const createCandidate = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const candidat = await Candidate.create(query);
            resolve(candidat)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const findCandidates = (query = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const candidats = await Candidate.find(query)
                                        .sort({createdAt: -1})
            resolve(candidats)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const deletecandidat = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const candidat = await Candidate.findByIdAndDelete(id);
            resolve(candidat)
        } catch (error) {
            reject({message: error.message})
        }
    })
}
const updateCandidat = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const candidat = await Candidate.findByIdAndUpdate(id, data, {new:true});
            resolve(candidat)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const findCandidat = (query = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const candidat = await Candidate.findOne(query);
            resolve(candidat)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

candidatSchema.methods.generateAuthToken = function() {
    const token= jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY, {expiresIn : "7d"});
    return token;
}

const validate =(data) => {
    const Schema= joi.object({
       firstName: joi.string().required().label("firstName"),
       lastName: joi.string().required().label("lastName"),
       phone: joi.string().required().label("phone"),
       email: joi.string().required().label("email"),
       password: passwordComplexity.required().label("password"),
       gender: joi.string().required().label("gender")

    });
    return Schema.validate(data);
}

module.exports ={
    createCandidate,
    findCandidates,
    deletecandidat,
    updateCandidat,
    findCandidat,
    validate
}