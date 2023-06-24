const candidateValidator = {
    body    :   {
        type    :   'object',
        required:   ['firstName','lastName','phone','email','password','gender'],
        properties  :   {
            firstName    :   { type: 'string' },
            lastName    :   { type: 'string' },
            phone    :   { type: 'string' },
            email    :   { type: 'string' },
            password    :   { type: 'string' },
            gender    :   { type: 'string' }
        }
    }
}
module.exports = {
    candidateValidator
}