const express = require('express');
const router = express.Router();
const { createDocument, getDocuments, getDocument, updateDocument,deleteDocument } = require('../controllers/documents.controller');
const {verifyToken} = require('../utils/validate-token');
const { validatorCreateDocument } = require('../validators/documents/documents.validator');

router.post('/' ,[verifyToken,validatorCreateDocument], createDocument);
router.get('/',verifyToken, getDocuments);
router.get('/:id', getDocument);
router.put('/:id', updateDocument);
router.delete('/:id', deleteDocument);


module.exports = router;