import React, { useState } from 'react';
import axios from 'axios';
import BoatsList from './../components/BoatsList';
import { Grid, Button } from '@mui/material';
import { TextField } from '@mui/material';

export default function BoatPage() {

    const [boats, setBoats] = useState([]);    
    const [name, setName] = React.useState([]);
    const [description, setDescription] = React.useState([]);

    const getBoats = async () => {
        try {
            const boats = await axios.get(`http://localhost:8080/api/boat`);
            console.log(boats);
            setBoats(boats.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleCreate = async () => {
        await axios.post(`http://localhost:8080/api/boat`, {
            name: name,
            description: description
        });

        await getBoats();

    }

    React.useEffect(() => {
        getBoats();
    }, []);

    return (
        <div className="App">
            <h2>List of Boats</h2>
            <Grid container alignItems="end">
                    <Grid item xs={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            type="text"
                            variant="standard"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Description"
                            type="text"
                            onChange={(e) => setDescription(e.target.value)}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" color="primary" onClick={() => handleCreate()}>Create</Button>
                    </Grid>
                </Grid>
            <body className="">
                {boats.length > 0 ? <BoatsList boats={boats} getBoats={getBoats} /> : undefined}
            </body>
        </div>
    );
}
