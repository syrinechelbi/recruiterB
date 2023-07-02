var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
 const config = require("../config");

const {createEmployer,
    findEmployer,
    updateEmployer,
    deleteEmployer,
    findOneEmployer}= require('../model/employer');
    

    const createOneemployer = async (req,res) =>{
        try {
            let employer = await createEmployer(req.body);
            res.status(200).send(employer);
        
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const updateOneemployer = async (req,res) =>{
        try {
            let employer =await updateEmployer(req.params.id,req.body);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const deleteOneemployer = async (req,res) =>{
        try {
            let employer =await deleteEmployer(req.param.id);
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const findallemployers = async (req,res) =>{
        try {
            let employer =await findEmployer({});
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

//LOGIN
const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        if (!(email && password)) {
          res.status(400).send({message: "All input are required"});
        }

        const employer = await findOneEmployer({email})
       
        if (employer && (await bcrypt.compare(password, employer.password))) {
            
            const token = jwt.sign(
                { user_id: employer._id, email},
                    config.secretKey,
                {
                    expiresIn: config.expiresIn,
                }
            );
    
            employer.token = token;
    
            res.status(200).send(employer);
        }
        res.status(400).send({message: "Invalid Credentials"});
    } catch (err) {
        res.status(400).send({message: err.message})
    }
}  
// INSCRIPTION 
const signUp = async (req, res) => {
    try {
   
        const { name, companyName, phone,email ,password } = req.body;

        if (!(email && password && name && companyName)) {
            return res.status(400).send({message: "All input is required"});
        }

        const oldUser = await findOneEmployer({email});

        if (oldUser) {
            return res.status(409).send({message:"User Already Exist. Please Login"});
        }

        encryptedPassword = await bcrypt.hash(password, 10);

        const employer = await createEmployer({name, companyName,phone, email, password: encryptedPassword})

        const token = jwt.sign(
            { user_id: employer._id, email },
            config.secretKey,
            {
                expiresIn: config.expiresIn,
            }
        );
        employer.token = token;

        res.status(200).send(employer);
    } catch (err) {
        res.status(400).send({message: err.message})
    }
}


module.exports={
    createOneemployer,
    updateOneemployer,
    deleteOneemployer,
    findallemployers,
    signIn,
    signUp
}