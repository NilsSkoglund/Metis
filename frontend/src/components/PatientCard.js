import React from "react";
import { Card, CardActions, CardContent, Typography, Button } from "@mui/material";

export default function PatientCard({ patient, onRemove }) {
    return (
        <Card sx={{ maxWidth: 275, margin: 2 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {patient.gender} {patient.age}
                </Typography>
                <Typography variant="h5" color={"text.primary"}>
                    {patient.first_name} {patient.last_name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Go to patient</Button>
                <Button size="small" onClick={() => onRemove(patient.id)}>Remove</Button>
            </CardActions>
        </Card>
    );
}
