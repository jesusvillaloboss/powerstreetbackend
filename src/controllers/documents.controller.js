
 const documentsModel = require('../models/nosql/documents') 


const createDocument = async (req, res) => {
    const { body } = req;
   const data = await documentsModel.create(body);
    res.send({data});
}
const getDocument = async (req, res) => {
    const id  = req.params.id;
    const document = await documentsModel.findById( id );
    
    res.send({document});
}
const getDocuments = async(req, res) => {
    const data = await documentsModel.find({})

    res.send( data );
}
const updateDocument = async(req, res) => {
    const { body } = req;
    const id = req.params.id;
    const data = await documentsModel.findOneAndUpdate(id, body);
    res.send({data});
 }
const deleteDocument = async(req, res) => {
      const id  = req.params.id;
    const document = await documentsModel.deleteOne( {id} );
    
    res.send({document});
 }

module.exports = {createDocument,getDocument,getDocuments,updateDocument,deleteDocument}