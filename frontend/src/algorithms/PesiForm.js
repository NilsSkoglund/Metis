const PesiForm = {
    title: "Pulmonary Embolism Severity Index (PESI)",
    short_name: "pesi",
    criterias: [
        {
            name: 'q1',
            question: 'Age',
            type: 'number',
            snomed: {
                conditions: [
                    {
                        id: 397669002,
                        type: 410680006,
                        unit_id: 258707000,
                    }
                ]
            }
        },
        {
            name: 'q2',
            question: 'Male Sex',
            points: 30,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 248153007,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    }
                ]
            }

        },
        {
            name: 'q3',
            question: 'History of cancer',
            points: 30,
            type: 'boolean',
            snomed: {
                conditions: {
                    id: 266987004,
                    type: 1119301001,
                    comparison: {
                        operator: 276136004,
                        value: true
                    }
                },
            }
        },
        {
            name: 'q4',
            question: 'History of heart failure',
            points: 10,
            type: 'boolean',
            snomed: {
                conditions: {
                    id: 161505003,
                    type: 1119301001,
                    comparison: {
                        operator: 276136004,
                        value: true
                    }
                },
            }
        },
        {
            name: 'q5',
            question: 'History of chronic lung disease',
            points: 10,
            type: 'boolean',
            snomed: {
                conditions: {
                    id: 414415007,
                    type: 1119301001,
                    comparison: {
                        operator: 276136004,
                        value: true
                    }
                },
            }
        },
        {
            name: 'q6',
            question: 'Heart rate ≥110',
            points: 20,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 364075005,
                        type: 1119301001,
                        comparison: {
                            operator: 276138003,
                            value: 110,
                            unit_id: 258983007,
                        }
                    }
                ]
            }
        },
        {
            name: 'q7',
            question: 'Systolic BP <100 mmHg',
            points: 30,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 271649006,
                        type: 1119301001,
                        comparison: {
                            operator: 276139006,
                            value: 100,
                            unit_id: 259018001
                        }
                    }
                ]
            }
        },
        {
            name: 'q8',
            question: 'Respiratory rate ≥30',
            points: 20,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 86290005,
                        type: 1119301001,
                        comparison: {
                            operator: 276138003,
                            value: 30,
                            unit_id: 258984001
                        }
                    }
                ]
            }
        },
        {
            name: 'q9',
            question: 'Temperature <36°C',
            points: 20,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 386725007,
                        type: 1119301001,
                        comparison: {
                            operator: 276139006,
                            value: 36,
                            unit_id: 258710007
                        }
                    }
                ]
            }
        },
        {
            name: 'q10',
            question: 'Altered mental status (disorientation, lethargy, stupor, or coma)',
            points: 60,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 62476001,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    },
                    {
                        id: 214264003,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    },
                    {
                        id: 89458003,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    },
                    {
                        id: 371632003,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    }
                ],
                logical_operator: "OR"
            }
        },
        {
            id: 'q11',
            question: 'O2 saturation <90%',
            points: 20,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 103228002,
                        type: 1119301001,
                        comparison: {
                            operator: 276139006,
                            value: 90,
                            unit_id: 118582008,
                        }
                    }
                ]
            }

        }
    ],
    stratification: [
        {
            name: "class_v",
            cutoff_value: 125,
            info_text: "Class V: Very high risk 10.0%-24.5% 30 day mortality",
            info_recommendation: "Admit to Intensive Care Unit and perform Echocardiogram to assess right ventricular function. Consult specialist and start treatment.",
            mui_color: "error",
        },
        {
            name: "class_iv",
            cutoff_value: 106,
            info_text: "Class IV: High risk 4.0-11.4% 30 day mortality",
            info_recommendation: "Admit to Intermediary Care Unit. Start treatment.",
            mui_color: "error"
        },
        {
            name: "class_iii",
            cutoff_value: 86,
            info_text: "Class III: Intermediate risk 3.2-7.1% 30-day mortality",
            info_recommendation: "Inpatient care at general ward. Start treatment.",
            mui_color: "warning"
        },
        {
            name: "class_ii",
            cutoff_value: 66,
            info_text: "Class II: Low risk 1.7-3.5% 30-day mortality",
            info_recommendation: "Outpatient care. Start treatment.",
            mui_color: "warning",
        },
        {
            name: "class_i",
            cutoff_value: 0,
            info_text: "Class I: Very low risk 0-1.6% 30-day mortality",
            info_recommendation: "Outpatient care. No treatment necessary for subsegmentell and/or peripheral embolus. Otherwise, start treatment.",
            mui_color: "success",
        },
    ],
    max_points: 250
}

export default PesiForm