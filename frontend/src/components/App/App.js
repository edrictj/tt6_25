import './App.css';

import React  from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import useToken from './useToken';

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
                <Route path="/login" element={ <Login />}/>
                <Route path="/register" element={ <Register /> }/>
            </Routes>
        </BrowserRouter>
    
    );
}

export default App;
