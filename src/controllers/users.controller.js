
const { usersModel } = require('../models'); 
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
require("dotenv").config();



const authUser = async (req, res) => {
    const { body } = req;
  const user = await usersModel.findOne({ user: body.user });
    if (user) {
        const password = await bcrypt.compare(body.pass, user.pass);
      if (password) {
        const token = jwt.sign({
        name: user.name,
        id: user._id
        }, process.env.TOKEN_SECRET, {
      expiresIn: user.max_idle_session_time
    })
    
    res.header('auth-token', token).json({
        data: {name: user.user,token}
    })
      } else {
        res.status(401)
      .json({ message: "Incorrect password." })
        } 
    } else {
    res.status(400)
      .json({ message: "User not found." })
    }
}
const logoutUser = async (req, res) => {
  res.cookie('auth-token', '', { maxAge: 1 });
  res.send('ok')
}


const createUser = async (req, res) => {
    const { body } = req;
    const password = await bcrypt.hash(body.pass, 10); 
    body.pass = password;
   const data = await usersModel.create(body);
    res.send({data});
}
const getUser = async (req, res) => {
    const id  = req.params.id;
    const user = await usersModel.findById( id );
    
    res.send({user});
}
const getUsers = async(req, res) => {
    const data = await usersModel.find({});

    res.send( data );
}
const updateUser = async(req, res) => {
    const { body } = req;
    const id = req.params.id;
    const data = await usersModel.findOneAndUpdate(id, body);
    res.send({data});
 }
const deleteUser = async(req, res) => {
      const id  = req.params.id;
    const user = await usersModel.deleteOne( {id} );
    
    res.send({user});
 }

module.exports = {authUser,logoutUser ,createUser,getUser,getUsers,updateUser,deleteUser}