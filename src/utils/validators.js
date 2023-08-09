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
        required:   ['firstName','lastName','companyName','phone','email','password'],
        properties  :   {
            firstName    :   { type: 'string' },
            lastName    :   { type: 'string' },
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
        required:   ['jobtitle','ReqEmployees','description','contractType','requirments','employer','applications'],
        properties  :   {
            jobTitle    :   { type: 'string' },
           ReqEmployees   :   { type: 'Number' },
            description    :   { type: 'string' },
            requirments    :   { type: 'string' },
            deadline    :   { type: Date },
            addInfo      :   { type: 'string' },
            company      :   { type: 'string' },
            employer      :   { type: 'string' },
            applications    :   [{ type: 'string' }]
         
    }
 }
}

const profileValidator = {
    body    :   {
        type    :   'object',
        required:   ['firstName','lastName','phone','email','gender','dateOfBirth','country','town','highLevel','educInstitut','fieldStudy','yearGrad','CopmanyP','jobTitleP','empPeriod','jobResp','techSkills','softSkills','Language','addInfor'],
        properties  :   {
            firstName    :   { type: 'string' },
            lastName    :   { type: 'string' },
            phone    :   { type: 'string' },
            email    :   { type: 'string' },
            gender    :   { type: 'string' },
            dateOfBirth    :   { type: Date },
            country   :   { type: 'string' },
            town    :   { type: 'string' },
            highLevel    :   { type: 'string' },
            educInstitut    :   { type: 'string' },
            fieldStudy      :   { type: 'string' },
            yearGrad      :   { type: 'string' },
            CopmanyP      :   { type: 'string' },
            jobTitleP    :   { type: 'string' },
            empPeriod      :   { type: 'string' },
            jobResp      :   { type: 'string' },
            techSkills      :   { type: 'string' },
            softSkills      :   { type: 'string' },
            Language      :   { type: 'string' },
            addInfor      :   { type: 'string' }
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
            email    :   { type: 'string' },
            password    :   { type: 'string', minLength: 8 }
        }
    }
}

const emailValidator = {
    body : {
        type    :   'object',
        required:   ['email'],
        properties  :   {
            email    :   { type: 'string' },
          
        }
    }
}


module.exports = {
    candidateValidator,
    employerValidator,
    applicationValidator,
    offreValidator,
    signInValidatorE,
    signInValidatorC,
    profileValidator,
    emailValidator
}