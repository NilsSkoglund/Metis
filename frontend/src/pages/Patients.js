import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NewPatientModal from "../components/NewPatientModal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Typography} from "@mui/material";

export default function Patients() {

    const [patients, setPatients] = useState([]);

    const [openModal, setOpenModal] = useState(false)
    const handleCloseModal = () => setOpenModal(false)
    const handleOpenModal = () => setOpenModal(true)

    useEffect(() => {
        const fetchPatients = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/patients/');
                setPatients(response.data);
            } catch (error) {
                console.error('Error fetching patients:', error);
            }
        };

        fetchPatients();
    }, []);

    return (
        <React.Fragment>
            <Box display="flex" alignItems={'center'} justifyContent={'center'} marginBottom={3}>
                <Button variant="contained" onClick={handleOpenModal}>Add New Patient</Button>
            </Box>
            <NewPatientModal open={openModal} onClose={handleCloseModal}/>
            {patients.map((patient) => (
                <Typography>
                    {patient.first_name}
                </Typography>
            ))}

        </React.Fragment>
    )
}