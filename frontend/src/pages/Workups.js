import React from "react";
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
                            key={workup.title}
                            workup={workup}
                        />
                    ))}
                </div>

    )
}