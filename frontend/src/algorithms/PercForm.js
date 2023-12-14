const PercForm = {
    title: 'Pulmonary Embolism Rule-Out Criteria (PERC)',
    short_name: 'perc',
    criterias: [
        {
            name: 'q1',
            question: 'Age ≥50',
            points: 1,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 397669002,
                        type: 1119301001,
                        comparison: {
                            operator: 276138003,
                            value: 50,
                            unit_id: 258707000
                        }
                    }
                ]
            }
        },
        {
            name: 'q2',
            question: 'HR ≥100',
            points: 1,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 364075005,
                        type: 1119301001,
                        comparison: {
                            operator: 276138003,
                            value: 100,
                            unit_id: 258983007,
                        }
                    }
                ]
            }
        },
        {
            name: 'q3',
            question: 'O₂ sat on room air <95%',
            points: 1,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 103228002,
                        type: 1119301001,
                        comparison: {
                            operator: 276139006,
                            value: 95,
                            unit_id: 118582008,
                        }
                    }
                ]
            }
        },
        {
            name: 'q4',
            question: 'Unilateral leg swelling',
            points: 1,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 762896009,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true,
                        }
                    },
                    {
                        id: 762897000,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true,
                        }
                    }
                ],
                logical_operator: "OR"
            }
        },
        {
            name: 'q5',
            question: 'Hemoptysis',
            points: 1,
            type: "boolean",
            snomed: {
                conditions: [
                    {
                        id: 66857006,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true,
                        }
                    }
                ]
            }
        },
        {
            name: 'q6',
            question: 'Surgery or trauma ≤4 weeks ago requiring treatment with general anesthesia',
            points: 1,
            type: "boolean",
            snomed: {
                conditions: [
                    {
                        id: 387713003,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true,
                        },
                        constrain: [
                            {
                                id: 762636008,
                                operator: 276137008,
                                value: 4,
                                unid_id: 258705008,
                            },
                            {
                                id: 420653000,
                                operator: 276136004,
                                value: true
                            }
                        ]

                    },
                    {
                        id: 417746004,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true,
                        },
                        constrain: [
                            {
                                id: 762636008,
                                operator: 276137008,
                                value: 4,
                                unid_id: 258705008,
                            },
                            {
                                id: 420653000,
                                operator: 276136004,
                                value: true
                            }
                        ]

                    },
                ],
                logical_operator: "OR"
            }
        },
        {
            name: 'q7',
            question: 'Prior PE or DVT',
            points: 1,
            type: "boolean",
            snomed: {
                conditions: [
                    {
                        id: 161508001,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true,
                        }
                    },
                    {
                        id: 161512007,
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
            name: 'q8',
            question: 'Use of oral contraceptives, HRT, or estrogen hormone use',
            points: 1,
            type: 'boolean',
            snomed: {
                conditions: [
                    {
                        id: 5935008,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    },
                    {
                        id: 182933001,
                        type: 1119301001,
                        comparison: {
                            operator: 276136004,
                            value: true
                        }
                    },
                    {
                        id: 243125009,
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
    ],
    stratification: [
        {
            name: "positive",
            cutoff_value: 1,
            info_text: "One or more criterias are positive, PERC rule cannot be used to rule out PE in this patient",
            info_recommendation: "Test for Fibrin-D-Dimer to rule out PE",
            mui_color: "error"
        },
        {
            name: "negative",
            cutoff_value: 0,
            info_text: "PERC is fulfilled. <2% chance of PE",
            info_recommendation: "No need for further workup",
            mui_color: "success"
        },
    ],
    max_points: 8
}

export default PercForm