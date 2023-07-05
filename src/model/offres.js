const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const offreSchema = new mongoose.Schema(
    {
        jobTitle: {type : String, default:null },
        ReqEmployees : {type : Number, default:null },
        description : {type : String, default:null },
        contactType : {type : String , default: "FULLTIME", enum:["FULLTIME","PARTTIME","INTERNSHIP"]},
        requirments : {type : String, default:null },
        employer : {type : Schema.Types.ObjectId,ref : "employers"},
        applications : [{type : Schema.Types.ObjectId,ref : "applications"}]

    },
    {timestamps:true}
);

const createOffre = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const offre = await Offre.create(query);
            resolve(offre)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const findOffres = (query = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const offres = await Offre.find(query)
                                        .sort({createdAt: -1})
            resolve(offres)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const deleteOffre = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const offre = await Offre.findByIdAndDelete(id);
            resolve(offre)
        } catch (error) {
            reject({message: error.message})
        }
    })
}
const updateOffre = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const offre = await Offre.findByIdAndUpdate(id, data, {new:true});
            resolve(offre)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

module.exports ={
    createOffre,
    findOffres,
    deleteOffre,
    updateOffre
}

const Offre = mongoose.model("offres",offreSchema);