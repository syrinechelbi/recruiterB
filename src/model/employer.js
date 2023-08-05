const mongoose = require("mongoose");


const employerSchema = new mongoose.Schema(
    {
        firstName : {type : String , default : null},
        lastName : {type : String , default : null},
        companyName : {type : String , default : null},
        phone : {type : String , default : null},
        email : {type : String , default : null},
        password : {type : String , default : null},
        token: { type: String },
 
    },
    {timestamps : true}
);

const Employer = mongoose.model("employers",employerSchema);


const createEmployer = (query) => {
    return new Promise(async(resolve, reject) => {
        try {
            const employer= await Employer.create(query);
            resolve(employer);
        } catch (error) {
            reject({message : error.message})
        }
    })
}
const findEmployer = (query= {} ) => {
    return new Promise(async(resolve, reject) => {
        try {
            const employer= await Employer.findOne(query);
            resolve(employer);
        } catch (error) {
            reject({message : error.message})
        }
    })
}

const updateEmployer = (id,data) => {
    return new Promise(async(resolve, reject) => {
        try {
            const employer= await Employer.findByIdAndUpdate(id,data,{new:true})
            resolve(employer);
        } catch (error) {
            reject({message : error.message})
        }
    })
}

const deleteEmployer = (id) => {
    return new Promise(async(resolve, reject) => {
        try {
            const employer= await Employer.findByIdAndDelete(id);
            resolve(employer);
        } catch (error) {
            reject({message : error.message})
        }
    })
}

const findemployers = (query = {})  => {
    return new Promise(async (resolve, reject) => {
        try {
            const employer = await Employer.find(query)
                                        .sort({createdAt: -1})
            resolve(employer)
        } catch (error) {
            reject({message: error.message})
        }
    })
}



module.exports={
createEmployer,
findEmployer,
updateEmployer,
deleteEmployer,
findEmployer,
findemployers
}