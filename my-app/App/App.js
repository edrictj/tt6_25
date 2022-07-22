import './App.css';

import React  from 'react';
import {BrowserRouter as Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from './useToken';

function App() {

    const { token, setToken } = useToken(); 
    
    if(!token) {
        return (
            <Login setToken={setToken} />
        )
    }

    return (
        <Routes>
            <Route path = "/Register" component = {Register}/>
        </Routes>
    );
}

export default App;
