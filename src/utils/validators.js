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


const EmployerValidator = {
    body    :   {
        type    :   'object',
        required:   ['firstName','lastName','phone','email','password','gender'],
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


module.exports = {
    candidateValidator,
    EmployerValidator,
    applicationValidator,
    offreValidator
}