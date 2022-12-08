import React, { useState } from 'react';
import axios from 'axios';
import BoatsList from './../components/BoatsList';

export default function BoatPage() {

    const [boats, setBoats] = useState([]);

    const getBoats = async () => {
        try {
            const boats = await axios.get(`http://localhost:8080/api/boat`);
            console.log(boats);
            setBoats(boats.data);
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        getBoats();
    }, []);

    return (

        <div className="App">
            <h2>List of Boats</h2>
            <body className="App-body">
                {boats.length > 0 ? <BoatsList boats={boats} /> : undefined}
            </body>
        </div>
    );
}
