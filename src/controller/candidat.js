const { createCandidate, findCandidates, deletecandidat, updateCandidat, findCandidat } = require("../model/candidat");


const createOneCandidat = async (req, res) => {
    try {
        let candidat = await createCandidate(req.body)
        res.status(200).send(candidat)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
}


  const updateOneCandidat = async (req, res) => {
    try {
      console.log(req.body)
      let candidat = await updateCandidat(req.params.id, req.body)
      res.status(201).send(candidat)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
  
  const deleteOneCandidat = async (req, res) => {
    try {
      let candidat = await deletecandidat(req.params.id)
      res.status(200).send(candidat)
  } catch (error) {
      res.status(400).send({message: error.message})
  }  };
 
  const findAllCandidats = async (req, res) => {
    try {
        let candidats = await findCandidates({})
        res.status(200).send(candidats)
    } catch (error) {
        res.status(400).send({message: error.message})
    }   
}

const findOneCandidate = async (req, res) => {
  try {
      let candidat = await findCandidat({})
      res.status(200).send(candidat)
  } catch (error) {
      res.status(400).send({message: error.message})
  }   
}



//Login 
const signIn = async (req,res) => {
  try {
    const {email , password } = req.body;

    if (!(email))
    {res.status(400).send({message : "fill in the email"});}
    else if (!(password))
    {res.status(400).send({message : "fill in the password"});}

    const candidat = await findOneCandidate({email})
    if (candidat && (await bcrypt.compare(password, candidat.password))) {
            
      const token = jwt.sign(
          { user_id: candidat._id, email},
              config.secretKey,
          {
              expiresIn: config.expiresIn,
          }
      );

      candidat.token = token;

      res.status(200).send(candidat);
  }
  res.status(400).send({message: "Invalid Credentials"});

} catch (err) {
  res.status(400).send({message: err.message})
}

}


//signUp
const signUp = async (req,res) =>{

  try {

    const {firstName,lastName,phone,gender,email,password} = req.body;
   
    if (!(firstName & lastName & phone & gender & email & password))
    {res.status(400).send({message: "All input is required"});}

    const oldUser = await findOneCandidate({email})

    if (oldUser)
    {res.status(400).send({message: "User already exist"});}

    const encryptedPassword = await bcrypt.hash(password,10);

    const candidate = await createCandidate(firstName , lastName , phone , gender , email , encryptedPassword);

    const token = jwt.sign(
      { user_id: candidate._id, email },
      config.secretKey,
      {
          expiresIn: config.expiresIn,
      }
  );
  candidate.token = token;

  res.status(200).send(candidate);


  } catch (error) {
    res.status(400).send({message : error.message})
  }

}



  
  module.exports = {
    createOneCandidat,
    updateOneCandidat,
    deleteOneCandidat,
    findAllCandidats,
    findOneCandidate,
    signIn
  };
  