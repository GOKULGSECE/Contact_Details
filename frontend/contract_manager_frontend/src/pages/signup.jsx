import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5002/api/users/register', { username,email, password });
            alert('Signup successful');
            navigate('/');
        } catch (error) {
            console.error('Error signing up', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Username' required />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
