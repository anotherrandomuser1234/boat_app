import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import * as React from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function BoatsList(props) {
    const navigate = useNavigate();
    const items = props?.boats;
    console.log("🚀 ~ file: BoatsList.js ~ line 9 ~ BoatsList ~ items", items)
    const noBoatsFound = "No Boats Found";

    const goToBoatDetailPage = (boatId) => {
        navigate(`/boats/${boatId}`);
    }

    const handleEdit = async (boat) => {
        await axios.put(`http://localhost:8080/api/boat/${boat.boatId}`);
    }

    const handleDelete = async (boatId) => {
        // make an axios call to delete the boat
        await axios.delete(`http://localhost:8080/api/boat/${boatId}`);
        // refresh the page
        
    }

    return (

        <div className="">
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
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
                                <TableCell>{boat.name}</TableCell>
                                <TableCell>{boat.description}</TableCell>
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