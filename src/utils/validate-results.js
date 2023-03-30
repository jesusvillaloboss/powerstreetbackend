const {validationResult} = require('express-validator')

 const validatorResults = (req, res, next) => {
    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(400);
        res.send({error: err.array()})
    }
}

module.exports = {validatorResults};