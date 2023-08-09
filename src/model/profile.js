const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const joi = require('joi');



const profileSchema = new mongoose.Schema(
    {
        firstName : {type : String, default:null },
        lastName : {type : String, default:null },
        phone : {type : String, default:null },
        email : {type : String, default:null },
        gender : {type : String, default:null },
        dateOfBirth : {type : Date, default:null },
        country : {type : String, default:null },
        town : {type : String, default:null },
        highLevel : {type : String, default:null },
        educInstitut : {type : String, default:null },
        fieldStudy : {type : String, default:null },
        yearGrad : {type : String, default:null },
        CopmanyP : {type : String, default:null },
        jobTitleP : {type : String, default:null },
        empPeriod : {type : String, default:null },
        jobResp : {type : String, default:null },
        techSkills : {type : String, default:null },
        softSkills : {type : String, default:null },
        Language : {type : String, default:null },
        addInfor : {type : String, default:null }

    },
    {timestamps:true}
);

const Profile = mongoose.model("profiles",profileSchema);

const createProfile = (query) => {
    return new Promise(async (resolve, reject) => {
        try {
            const profile = await Profile.create(query);
            resolve(profile)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const findProfiles = (query = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const profiles = await Profile.find(query)
                                        .sort({createdAt: -1})
            resolve(profiles)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const deleteprofile = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const profile = await Profile.findByIdAndDelete(id);
            resolve(profile)
        } catch (error) {
            reject({message: error.message})
        }
    })
}
const updateProfile = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const profile = await Profile.findByIdAndUpdate(id, data, {new:true});
            resolve(profile)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

const findProfile = (query = {}) => {
    return new Promise(async (resolve, reject) => {
        try {
            const profile = await Profile.findOne(query);
            resolve(profile)
        } catch (error) {
            reject({message: error.message})
        }
    })
}

profileSchema.methods.generateAuthToken = function() {
    const token= jwt.sign({_id:this._id},process.env.JWTPRIVATEKEY, {expiresIn : "7d"});
    return token;
}

const validate =(data) => {
    const Schema= joi.object({
        firstName: joi.string().required().label("firstName"),
        lastName: joi.string().required().label("lastName"),
        phone: joi.string().required().label("phone"),
        email: joi.string().required().label("email"),
        gender: joi.string().required().label("gender"),
        dateOfBirth: joi.string().required().label("dateOfBirth"),
        country: joi.string().required().label("country"),
        town: joi.string().required().label("town"),
        highLevel: joi.string().required().label("highLevel"),
        fieldStudy: joi.string().required().label("fieldStudy"),
        yearGrad: joi.string().required().label("yearGrad"),
        CopmanyP: joi.string().required().label("CopmanyP"),
        jobTitleP: joi.string().required().label("jobTitleP"),
        empPeriod: joi.string().required().label("empPeriod"),
        jobResp: joi.string().required().label("jobResp"),
        techSkills: joi.string().required().label("techSkills"),
        softSkills: joi.string().required().label("softSkills"),
        Language: joi.string().required().label("Language"),
        addInfor: joi.string().required().label("addInfor"),
        candidate : {type : Schema.Types.ObjectId,ref : "candidates"},

    });
    return Schema.validate(data);
}

module.exports ={
    createProfile,
    findProfiles,
    deleteprofile,
    updateProfile,
    findProfile,
    validate
}