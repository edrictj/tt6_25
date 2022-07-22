import './App.css';

import React  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from './useToken';
import Dashboard from '../Dashboard/Dashboard';
import Wallet from '../Wallet/Wallet'

function App() {

    const { token, setToken } = useToken(); 
    
    // if(!token) {
    //     return (
    //         <Login setToken={setToken} />
    //     )
    // }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login />}/>
                <Route path="/register" element={ <Register /> }/>
                <Route path="/dashboard" element={ <Dashboard /> }/>
                <Route path="/wallet" element={ <Wallet /> }/>
            </Routes>
        </BrowserRouter>
    
    );
}

export default App;
