import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NewPatientModal from "../components/NewPatientModal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PatientCard from "../components/PatientCard";

export default function Patients() {

    const [patients, setPatients] = useState([]);
    const [openModal, setOpenModal] = useState(false)
    const fetchPatients = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/patients/');
                setPatients(response.data);
                return true;
            } catch (error) {
                console.error('Error fetching patients:', error);
                return false;
            }
        };

    useEffect(() => {
        fetchPatients()
    }, []);

    const handleCloseModal = async () => {
        setOpenModal(false);
        await fetchPatients()
    }
    const handleOpenModal = () => setOpenModal(true)

    const handleRemove = async (patientId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/patients/${patientId}`)
            setPatients(patients.filter(patient => patient.id !== patientId))
        } catch (error) {
            console.error('Error removing patient:', error);
        }
    }

    return (
        <React.Fragment>
            <Box display="flex" alignItems={'center'} justifyContent={'center'} marginBottom={3}>
                <Button variant="outlined" color='success' onClick={handleOpenModal}>Add New Patient</Button>
            </Box>
            <NewPatientModal open={openModal} onClose={handleCloseModal}/>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                {patients.map((patient) => (

                    <PatientCard
                        key={patient.id}
                        patient={patient}
                        onRemove={handleRemove}
                    />

                ))}
            </div>

        </React.Fragment>
    )
}