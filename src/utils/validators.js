const candidateValidator = {
    body    :   {
        type    :   'object',
        required:   ['firstName','lastName','phone','email','password','gender'],
        properties  :   {
            firstName    :   { type: 'string' },
            lastName    :   { type: 'string' },
            phone    :   { type: 'string' },
            email    :   { type: 'string' },
            password    :   { type: 'string' , minLength: 8 },
            gender    :   { type: 'string' }
        }
    }
}
applicationValidator ={
    body    :   {
        type    :   'object',
      required:   ['offres','candidat'],
    
        
    }
}


const employerValidator = {
    body    :   {
        type    :   'object',
        required:   ['name','companyName','phone','email','password','gender'],
        properties  :   {
            name    :   { type: 'string' },
            companyName   :   { type: 'string' },
            phone    :   { type: 'string' },
            email    :   { type: 'string' },
            password    :   { type: 'string' , minLength: 8 },
         
    }
}
}

const offreValidator = {
    body    :   {
        type    :   'object',
        required:   ['maxEmployees','minEmployees','description','contractType','employer','applications'],
        properties  :   {
            maxEmployees    :   { type: 'Number' },
            minEmployees   :   { type: 'Number' },
            description    :   { type: 'string' },
            applications    :   [{ type: 'string' }]
         
    }
 }
}
const signInValidatorE = {
    body : {
        type    :   'object',
        required:   ['email', 'password'],
        properties  :   {
            email    :   { type: 'string' },
            password    :   { type: 'string', minLength: 8 }
        }
    }
}

const signInValidatorC = {
    body : {
        type    :   'object',
        required:   ['email', 'password'],
        properties  :   {
            firstName : { type: 'string' },
            lastName : { type: 'string' },
            phone : { type: 'string' },
            gender : { type: 'string' },
            email    :   { type: 'string' },
            password    :   { type: 'string', minLength: 8 }
        }
    }
}


module.exports = {
    candidateValidator,
    employerValidator,
    applicationValidator,
    offreValidator,
    signInValidatorE,
    signInValidatorC
}