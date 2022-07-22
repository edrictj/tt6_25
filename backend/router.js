import express from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./models/user_model.js";

const router = express.Router();

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.findOne({ where: { username: username } });

    if(!user) {
		console.log('Not found');
        return res.json({
            status: 401
        });
    }
    const passwordMatch = bcrypt.compareSync(password, user.password);
    if(!passwordMatch) {
        console.log("wrong password\n");
        return res.json({
            status: 403
        });
    }
    
    if (user && passwordMatch) {
        user.password = undefined;
        jwt.sign({ name: user.name, username: user.username }, process.env.SECRET_KEY, {expiresIn: '24h'}, (err, token) => {
            if (err) console.log(err)
            res.json({
                token:token
            })
        })
    }
})

router.post('/register', async (req, res) => {
    const username = req.body.username;
  
    const existingUser = await User.findOne({ where: { username: username } });
    if (existingUser) {
        console.log("Username already in use.");
        return res.status(500).send({ error: 'Username already in use.'});
    }
		
    const newUser = await User.create({
        name: req.body.name,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync()),
        username: username,
    })
    console.log(newUser);
    res.json({status:true});
})


export default router;
