import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import * as React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function BoatsList(props) {

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    const navigate = useNavigate();
    const items = props?.boats;
    console.log("🚀 ~ file: BoatsList.js ~ line 9 ~ BoatsList ~ items", items)

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const goToBoatDetailPage = (boatId) => {
        navigate(`/boats/${boatId}`);
    }

    const handleEdit = async (boat) => {
        console.log("🚀 ~ file: BoatsList.js ~ line 28 ~ handleEdit ~ boat", boat)
        let updatedName = name;
        let updatedDescription = description;

        if (updatedName === "") updatedName = boat.name;
        if (updatedDescription === "") updatedDescription = boat.description;

        await axios.put(`http://localhost:8080/api/boat/${boat.id}`, {
            name: updatedName,
            description: updatedDescription
        });
    }

    const handleDelete = async (boatId) => {
        // make an axios call to delete the boat
        await axios.delete(`http://localhost:8080/api/boat/${boatId}`);
        await props.getBoats();
    }

    return (

        <div className="boatContainer">

            <TableContainer>
                <Table sx={{ minWidth: 650, marginTop: "4rem" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((boat) => (
                            <TableRow
                                key={boat.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell> 
                                    <TextField autoFocus margin="dense" id="name" type="text" variant="standard" defaultValue={boat.name} onChange={handleNameChange}/>
                                </TableCell>
                                <TableCell class="clickable">
                                    <TextField autoFocus margin="dense" id="name" type="text" variant="standard" defaultValue={boat.description} onChange={handleDescriptionChange}/>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => goToBoatDetailPage(boat.id)}>Show Details</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="primary" onClick={() => handleEdit(boat)}>Edit</Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined" color="error" onClick={() => handleDelete(boat.id)}>Delete</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>

                </Table>
            </TableContainer>
        </div>
    );

}