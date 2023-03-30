const express = require('express');
const router = express.Router();
const { authUser,logoutUser, createUser, getUsers, getUser, updateUser,deleteUser } = require('../controllers/users.controller');
const {validatorCreateUser} = require('../validators/users/users.validator');

router.post('/',validatorCreateUser, createUser);
router.post('/login', authUser);
router.get('/logout' ,logoutUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);


module.exports = router;