const express = require("express")
const usersRouter = express.Router()
const {createUser, getUser, getUserByUsername} = require('../db')
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

usersRouter.post('/login', async (req, res, next) => {
    try {
        const {username, password}= req.body;

        if (!username || ! password) {
            res.send ({
                error: 'MissingUsernamePassword',
                name: 'Missing Username or Password',
                message: 'Please enter a username and password'
            })
        } else {
            const user = await getUser(req.body);
            if (user){
                const token = jwt.sign(user, JWT_SECRET);
                res.send({
                    name:'LoginSuccessful',
                    message: 'You are logged in!',
                    user
                })
            } else {
                res.send ({
                    error: 'UserNotFound',
                    name: 'User not found',
                    message:'User does not exist'
                })
            }
        } 

    } catch ({error, message}) {
        next({name, message});
    }
})

usersRouter.post('/register', async (req, res, next) => {
    try {
        const { username, password, isAdmin } = req.body;

        if (!username || !password) {
            res.send({
                error: 'MissingUsernamePassword',
                name: 'Missing Username or Password',
                message: 'Please enter a username and password'
            })
        } else if (password.length < 8) {
            res.send({
                error:'PasswordTooShort',
                name:'PasswordTooShort',
                message:'Password is too short!',
            })
        } else {
            const _user = await getUserByUsername(username);
            if(_user) {
                res.send({
                    error:'UsernameAlreadyTaken',
                    name:'UsernameAlreadyTaken',
                    message:'User ${username} is already taken'
                })
            } else {
                const user = await createUser ({
                    username, password
                });
                if(user){
                    const token = jwt.sign(user, JWT_SECRET);
                    res.send({
                        name:'RegisterSuccessful',
                        message:'Thank you for signing up',
                        user,
                    })
                }
            }
        }
          

    } catch ({ error, message }) {
        next({ name, message });
    }
})

