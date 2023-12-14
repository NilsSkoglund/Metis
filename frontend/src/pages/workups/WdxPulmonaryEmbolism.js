import React, {useState} from 'react'
import AccordionForm from "../../components/AccordionForm";
import WellsPeForm from "../../algorithms/WellsPeForm";
import PercForm from "../../algorithms/PercForm";
import PesiForm from "../../algorithms/PesiForm";

const initialWellsState = {
        q1: false,
        q2: false,
        q3: false,
        q4: false,
        q5: false,
        q6: false,
        q7: false,
    };

const initialPercState = {
    q1: false,
    q2: false,
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false
};

const initialPesiState = {
    q1: "",
    q2: "",
    q3: false,
    q4: false,
    q5: false,
    q6: false,
    q7: false,
    q8: false,
    q9: false,
    q10: false,
    q11: false,
}

export default function WdxPulmonaryEmbolism() {

    const [formStates, setFormStates] = useState({
        wells: { state: {...initialWellsState}, points: 0 },
        perc: { state: {...initialPercState}, points: 0 },
        pesi: { state: {...initialPesiState}, points: 0 }
    });

    const handleStateChange = (formName, newState) => {
        setFormStates(prevStates => ({
            ...prevStates,
            [formName]: { ...prevStates[formName], state: newState }
        }));
    };

    const handlePointsChange = (formName, newPoints) => {
        setFormStates(prevStates => ({
            ...prevStates,
            [formName]: { ...prevStates[formName], points: newPoints }
        }));
    };

    return (
        <div>
            <AccordionForm
                formData={WellsPeForm}
                state={formStates.wells.state}
                score={formStates.wells.points}
                setState={newState => handleStateChange('wells', newState)}
                setScore={newPoints => handlePointsChange('wells', newPoints)}
            />
            <AccordionForm
                formData={PercForm}
                state={formStates.perc.state}
                score={formStates.perc.points}
                setState={newState => handleStateChange('perc', newState)}
                setScore={newPoints => handlePointsChange('perc', newPoints)}
            />
             <AccordionForm
                formData={PesiForm}
                state={formStates.pesi.state}
                score={formStates.pesi.points}
                setState={newState => handleStateChange('pesi', newState)}
                setScore={newPoints => handlePointsChange('pesi', newPoints)}
            />
        </div>
    )
}