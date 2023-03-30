const {check} = require('express-validator')
const {validatorResults} = require('../../utils/validate-results');
const validatorCreateDocument = [
    check('title').exists().notEmpty(),
    check('document').exists().notEmpty(),
    check('author').exists().notEmpty(),
    check('modified_by').exists().notEmpty(),
    check('created_at').exists().notEmpty(),
    check('updated_at').exists().notEmpty(),
    check('history_change').exists().notEmpty(),

        (req, res, next)=> {
        return validatorResults(req,res,next)
    }
];

module.exports = {validatorCreateDocument};


