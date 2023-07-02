const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const applicationSchema = new mongoose.Schema(
    {
        
     //   offres : {type : Schema.Types.ObjectId,ref : "offres"},
        candidat : {type : Schema.Types.ObjectId,ref : "candidates"}

    },
    {timestamps:true}
);

const Application = mongoose.model("applications",applicationSchema);
const createApplication = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const application = await Application.create(query);
            resolve(application)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const findApplications = (query = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const applications = await Application.find(query)
                                        .sort({createdAt: -1})
            resolve(applications)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const deleteApplication = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const application = await Application.findByIdAndDelete(id);
            resolve(application)
        } catch (error) {
            reject({message: error.message})
        }
    })
}


const getApplication = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const application = await Application.findById(id);
            resolve(application)
        } catch (error) {
            reject({message: error.message})
        }
    })
}
module.exports ={
    createApplication,
    findApplications,
    deleteApplication,
    getApplication
}