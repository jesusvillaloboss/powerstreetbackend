const {check} = require('express-validator')
const {validatorResults} = require('../../utils/validate-results');
const validatorCreateUser = [
    check('user').exists().notEmpty(),
    check('pass').exists().notEmpty(),
    check('name').exists().notEmpty(),
    check('last_login').exists().notEmpty(),
    check('type').exists().notEmpty(),
    check('max_idle_session_time').exists().notEmpty(),
        (req, res, next)=> {
        return validatorResults(req,res,next)
    }
];

module.exports = {validatorCreateUser};


