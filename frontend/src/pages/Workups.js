import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import NewPatientModal from "../components/NewPatientModal";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import WorkupCard from "../components/WorkupCard";

export default function Workups() {

    const workups = [
        {
            title: "Pulmonary Embolism",
            description: "Here goes some context for when to use this workup",
            path: "/pulmonary_embolism"
        },
        {
            title: "Myocardial Infarction",
            description: "Here goes some context for when to use this workup",
            path: "/myocardial_infarction"
        }
    ]

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            {workups.map((workup) => (
                <WorkupCard
                    workup={workup}
                />
            ))}
        </div>

    )
}