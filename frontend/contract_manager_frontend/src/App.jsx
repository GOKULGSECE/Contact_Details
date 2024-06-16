import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login'
import Signup from './pages/signup';
import Contracts from './pages/homepage';

function App() {
    const [token, setToken] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contracts" element={token ? <Contracts token={token} /> : <Login setToken={setToken} />} />
            </Routes>
        </Router>
    );
}

export default App;
