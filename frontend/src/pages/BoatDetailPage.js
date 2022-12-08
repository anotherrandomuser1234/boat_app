import React, { useState } from 'react';
import axios from 'axios';
import BoatsList from './../components/BoatsList';
import { Grid, Button } from '@mui/material';
import { TextField } from '@mui/material';

export default function BoatDetailPage() {

    const [boat, setBoat] = useState([]);

    //get id from url
    const id = window.location.pathname.split("/")[2];

    const getBoat = async () => {
        try {
            const boats = await axios.get(`http://localhost:8080/api/boat/${id}`);
            console.log(boats);
            setBoat(boats.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getBoat();
    }, []);

    return (
        <div className="App">
            <h2>Boat detail page</h2>
            <p>Name: {boat.name}</p>
            <p>Description: {boat.description}</p>
        </div>
    );
}
