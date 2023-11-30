import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {useState} from "react";
import axios from "axios";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function NewPatientModal({ open, onClose }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [chiefComplaint, setChiefComplaint] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [currentMedication, setCurrentMedication] = useState('');

    const handleRegister = async () => {
        const patientData = {
            first_name: firstName,
            last_name: lastName,
            temporary_age: age,
            gender: gender,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/patients/', patientData)
            onClose();
        } catch (error) {
            console.error('Error submitting patient data:', error)
        }
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Register new patient
                    </Typography>
                    <Typography id="modal-modal-description" variant="body2" sx={{ mt: 0, mb:4 }}>
                        Note! Details can be added in the next step
                    </Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <TextField
                            fullWidth
                            label={'First Name'}
                            sx={{ mx:1 }}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            fullWidth
                            label={'Last Name'}
                            sx={{ mx:1 }}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my:2 }}>
                        <TextField
                            fullWidth
                            label={'Age'}
                            sx={{ mx:1 }}
                            type={'number'}
                            variant={'outlined'}
                            onChange={(e) => setAge(e.target.value)}
                        />
                        <FormControl fullWidth sx={{ mx:1 }}>
                            <InputLabel id={'gender-select-label'}>Gender</InputLabel>
                            <Select
                                labelId='gender-select-label'
                                id='gender-select'
                                value={gender}
                                label="Gender"
                                onChange={(e) => setGender(e.target.value)}
                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'M'}>Male</MenuItem>
                                <MenuItem value={'F'}>Female</MenuItem>
                                <MenuItem value={'I'}>Intersex</MenuItem>
                                <MenuItem value={'X'}>Unknown</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my:2 }}>
                        <TextField
                            fullWidth
                            label={'Chief Complaint'}
                            sx={{ mx:1 }}
                            variant={'outlined'}
                            multiline
                            rows={2}
                            onChange={(e) => setChiefComplaint(e.target.value)}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my:2 }}>
                        <TextField
                            fullWidth
                            label={'Medical History'}
                            sx={{ mx:1 }}
                            variant={'outlined'}
                            multiline
                            onChange={(e) => setMedicalHistory(e.target.value)}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ my:2 }}>
                        <TextField
                            fullWidth
                            label={'Current Medication'}
                            sx={{ mx:1 }}
                            variant={'outlined'}
                            multiline
                            onChange={(e) => setCurrentMedication(e.target.value)}
                        />
                    </Box>
                    <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2, mx: 1 }}>
                        <Button variant="contained" onClick={onClose}>Cancel</Button>
                        <Button variant="contained" color="primary" onClick={handleRegister}>Register</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}

export default NewPatientModal;