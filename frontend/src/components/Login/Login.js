import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css'; 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AlertMessage from '../AlertMessage/AlertMessage';

const config = require('../Configuration/config.json');
const API_URL =  config.API_URL; 

async function loginUser(credentials) {
    return fetch(API_URL + "login/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [loginStatus, setLoginStatus] = useState();

    const register = async (e) => {
        e.preventDefault();
        window.location.href = '/register';
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Fetch sends the username and password 
        // to the back end which validates against the db and then 
        // returns a response. 
        const res = await loginUser({
            username,
            password
        })
        if (res.status === 401 || res.status === 403) {
            setLoginStatus({ msg: "Incorrect login details.", key: Math.random(), severity: "error" });
        }
        else {
            setToken(res);
            setLoginStatus({ msg: "Login successful.", key: Math.random(), severity: "success" });
            window.location.href = "/Dashboard";
        }
    }


    return(
        <section className="login-wrapper">
            <form onSubmit={handleSubmit}>
            {loginStatus ? <AlertMessage key={loginStatus.key} message={loginStatus.msg} severity={loginStatus.severity} /> : null}
            <br/>

            <section className="headerBox">
                <Box
                border={1}
                bgcolor="secondary.main"
                borderRadius={16}
                borderColor="secondary.main"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={370}
                height={56}
                boxShadow={4}
                position="absolute"
                top={70}>
                    <h2>LOGIN</h2>
                </Box>
            </section>
            <section className="credentialsBox">
                <Box
                borderRadius={16}
                width={370}
                height={400}
                boxShadow={6}>
                    <br/>
                    <section className="credentials">
                        <TextField
                            required
                            id="username"
                            label="Username"
                            variant="outlined"
                            color="secondary"
                            height="56px"
                            width="232px"
                            onChange={e => setUserName(e.target.value)}
                        />
                        <br/>
                        <br/>
                        <TextField
                            required
                            id="password"
                            label="Password"
                            type="password"
                            placeholder="At least 8 characters..."
                            variant="outlined"
                            color="secondary"
                            height="56px"
                            width="232px"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </section> 
                    <section className="submission">
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            style={{minWidth: "85px", minHeight:"35px"}}>
                            Sign in
                        </Button>
                    </section>
                </Box>
            </section>
            <br/>
            </form>
            <section className="register">
                        <Button
                            type="register"
                            variant="contained"
                            color="secondary"
                            style={{minWidth: "85px", minHeight:"35px"}}
                            onClick={register}>
                            Register
                        </Button>
                    </section>
        </section>
        )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};