import React, { useState } from 'react';
import './Register.css'; 
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const config = require('../Configuration/config.json');
const API_URL =  config.API_URL; 

export default function Register() {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const login = async (e) => {
        e.preventDefault();
        window.location.href = '/';
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const credentials = {name, username, password};

        var res = await fetch(API_URL + 'register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }); 

        // Response we get from db
        res = await res.json(); 
        
        if (res.status) {
            // Successful registration
            // Redirect to the login page. 
            window.location.href = "/";
        }
        else {
            // Send error to user to try again. 
        }
    }
    
    return(
        <section class="register-wrapper">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
            <section class="registration">
                <TextField
                    required
                    id="name"
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    height="56px"
                    width="232px"
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                <br></br>
                
                <TextField
                    required
                    id="username"
                    label="Username"
                    variant="outlined"
                    colour="secondary"
                    height="56px"
                    width="232px"
                    onChange={e => setUserName(e.target.value)}
                />
                <br></br>
                <br></br>
                <TextField
                    required
                    id="password"
                    label="Password"
                    placeholder="At least 8 symbols..."
                    variant="outlined"
                    color="secondary"
                    height="56px"
                    width="232px"
                    onChange={e => setPassword(e.target.value)}
                />
                <br></br>
                <br></br>
                
                <Button
                    type="register"
                    variant="contained"
                    color="secondary"
                    style={{minWidth: "85px", minHeight:"35px"}}>
                    Register
                </Button>
                <br></br>
                <br></br>
            </section>
            </form>
            <Button
                type="login"
                variant="contained"
                color="secondary"
                style={{minWidth: "85px", minHeight:"35px"}}
                onClick={login}>
                Back to Login
            </Button>
        </section>
        )
}