var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
 const config = require("../config");

const {createEmployer,
    findEmployer,
    updateEmployer,
    deleteEmployer,
    findemployers}= require('../model/employer');
    

    const createOneemployer = async (req,res) =>{
        
        try {
            console.log(req.body)
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
            let employer =await findemployers({});
            res.status(200).send(employer);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

    const findOneEmployer = async (req,res) =>{
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

        const employer = await findEmployer({email})
       
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
else {        res.status(400).send({message: "Invalid Credentials"});}
    } catch (err) {
        res.status(400).send({message: err.message})
    }
}  
// INSCRIPTION 
const signUp = async (req, res) => {
    try {
   console.log(req.body)
        const { firstName,lastName, companyName, phone,email ,password } = req.body;

        if (!(email && password && firstName && lastName && companyName)) {
            return res.status(400).send({message: "All input is required"});
        }
        console.log('1')

        const oldUser = await findEmployer({email:req.body.email});
        console.log('2')

        if (oldUser) {
            return res.status(409).send({message:"User Already Exist. Please Login"});
        }
        console.log('3')
        encryptedPassword = await bcrypt.hash(password, 10);

        const employer = await createEmployer({firstName,lastName, companyName,phone, email, password: encryptedPassword})
        console.log('4')
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

//check email 
const checkEmail = async (req,res) =>{

    try {
  
      const {email} = req.body;
  
      let body = {...req.body}
      console.log(body);
      const oldUser = await findEmployer({email})
      console.log(oldUser);
      if (!oldUser)
      {res.status(400).send({message: "User not exist"});}
      
      console.log("abcd",oldUser);
      res.status(200).send(oldUser);

    }
   catch (error) {
    res.status(400).send({message : error.message})
  }
  
  }
  


module.exports={
    createOneemployer,
    updateOneemployer,
    deleteOneemployer,
    findallemployers,
    findOneEmployer,
    signIn,
    signUp,
    checkEmail
}