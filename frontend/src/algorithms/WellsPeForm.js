const WellsPeForm = {
        title: 'Wells Criteria for Pulmonary Embolism',
        short_name: 'wells_pe',
        criterias: [
            {
                name: "q1",
                question: "Clinical signs and symptoms of DVT",
                points: 3,
                type: "boolean",
                snomed: {
                    conditions: [
                        {
                            id: 128053003,
                            type: 1119301001,
                            comparison: {
                                operator: 415684004,
                                value: true,
                            }
                        }
                    ]
                }
            },
            {
                name: "q2",
                question: "PE is #1 diagnosis OR equally likely",
                points: 3,
                type: "boolean",
                snomed: {
                    conditions: [
                        {
                            id: 59282003,
                            type: 1119301001,
                            comparison: {
                                operator: 2931005,
                                value: true,
                            }
                        }
                    ]
                }
            },
            {
                name: "q3",
                question: "Heart rate > 100",
                points: 1.5,
                type: "boolean",
                snomed: {
                    conditions: [
                        {
                            id: 364075005,
                            type: 1119301001,
                            comparison: {
                                operator: 276140008,
                                value: 100,
                                unit_id: 258983007,
                            }
                        }
                    ]
                }

            },
            {
                name: "q4",
                question: "Immobilization at least 3 days OR surgery in the previous 4 weeks",
                points: 1.5,
                type: "boolean",
                snomed: {
                    conditions: [
                        {
                            id: 257884004,
                            type: 1119301001,
                            comparison: {
                                operator: 276136004,
                                value: true,
                            },
                            constrain: {
                                id: 762636008,
                                operator: 276138003,
                                value: 3,
                                unit_id: 258703001
                            }
                        },
                        {
                            id: 387713003,
                            type: 1119301001,
                            comparison : {
                                operator: 276136004,
                                value: true,
                            },
                            constrain: {
                                id: 762636008,
                                operator: 276137008,
                                value: 4,
                                unit_id: 258705008
                            }
                        }
                    ],
                    logical_operator: "OR"
                }
            },
            {
                name: "q5",
                question: "Previous, objectively diagnosed PE or DVT",
                points: 1.5,
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
                name: "q6",
                question: "Hemoptysis",
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
                name: "q7",
                question: "Malignancy w/ treatment within 6 months or palliative",
                points: 1,
                type: "boolean",
                snomed: {
                    conditions: [
                        {
                            id: 1240414004,
                            type: 1119301001,
                            comparison: {
                                operator: 276136004,
                                value: true
                            },
                            constrain: [
                                {
                                    id: 363688001,
                                    operator: 276136004,
                                    value: true,
                                },
                                {
                                    id: 762636008,
                                    operator: 276137008,
                                    value: 6,
                                    unit_id: 258706009
                                }
                            ]
                        },
                        {
                            id: 1240414004,
                            type: 1119301001,
                            comparison: {
                                operator: 276136004,
                                value: true
                            },
                            constrain: {
                                id: 1255904006,
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
                name: "high",
                cutoff_value: 6,
                info_text: "High risk group: 40.6% chance of PE in an ED population",
                info_recommendation: "Consider CTPA and initiation of anticoagulation therapy without further testing",
                mui_color: "error"
            },
            {
                name: "moderate",
                cutoff_value: 2,
                info_text: "Moderate risk group: 16.2% chance of PE in an ED population",
                info_recommendation: "Test for Fibrin-D-Dimer to rule out PE",
                mui_color: "warning"
            },
            {
                name: "low",
                cutoff_value: 0,
                info_text: "Low risk group: 1.3% chance of PE in an ED population",
                info_recommendation: "Perform PERC to rule out PE",
                mui_color: "success"
            }
        ],
        max_points: 12.5
    }

export default WellsPeForm