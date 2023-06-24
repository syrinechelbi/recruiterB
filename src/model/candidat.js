const mongoose = require("mongoose");

const candidatSchema = new mongoose.Schema(
    {
        firstName : {type : String, default:null },
        laststName : {type : String, default:null },
        phone : {type : String, default:null },
        email : {type : String, default:null },
        password : {type : String, default:null },
        gender : {type : String, default:null }


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

module.exports ={
    createCandidate
}