import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contracts = ({ token }) => {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        const fetchContracts = async () => {
            try {
                const response = await axios.get('http://localhost:5002/api/contacts/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setContracts(response.data);
            } catch (error) {
                console.error('Error fetching contracts', error);
            }
        };

        fetchContracts();
    }, [token]);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`/api/contacts/${id}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setContracts(contracts.filter(contract => contract._id !== id));
        } catch (error) {
            console.error('Error deleting contract', error);
        }
    };

    return (
        <div>
            <h1>Contracts</h1>
            <ul>
                {contracts.map(contract => (
                    <li key={contract._id}>
                        {contract.name}
                        <button onClick={() => handleDelete(contract._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contracts;
