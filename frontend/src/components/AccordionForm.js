import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    FormControlLabel,
    FormGroup,
    Grid,
    LinearProgress,
    Switch,
    IconButton
} from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import {useState} from "react";
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function AccordionForm({ formData, state, score, setState, setScore }) {
    const [validationState, setValidationState] = useState({});
    const [fieldState, setFieldState] = useState(
        Object.fromEntries(formData.criterias.map(criterion => [criterion.name, 'default']))
    );
    const handleChange = (event, criterionName) => {
        if (fieldState[criterionName] === 'default') {
            setFieldState(prev => ({ ...prev, [criterionName]: 'modified' }));
        }
        const { name, value, checked, type } = event.target;
        const newValue = type === "checkbox" ? checked : value;

        const newState = { ...state, [name]: newValue };
        setState(newState);

        let totalScore = 0;
        formData.criterias.forEach(item => {
            if (item.type === "boolean" && newState[item.name]) {
                totalScore += item.points;
            } else if (item.type === "number") {
                totalScore += parseFloat(newState[item.name]) || 0;
            }
        });
        setScore(totalScore);
    };
    const handleIconClick = (criterionName) => {
        const currentState = fieldState[criterionName];
        const newState = currentState === 'default' ? 'modified' : 'default';
        setFieldState(prev => ({ ...prev, [criterionName]: newState }));
    };

    const numberInputStyles = {
        width: '45px',
        marginLeft: '8px',
        marginRight: '5px',
        '& .MuiInputBase-input': {
            padding: '5px',
            textAlign: 'center',
        },
        '& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0,
        },
    };
    const NumberInput = ({ criterion, state, handleChange }) => {

        const [inputValue, setInputValue] = useState(state[criterion.name]);

        const handleInputChange = (e) => {
            setInputValue(e.target.value); // Update local state
        };

        const handleBlur = () => {
            handleChange({target: {name: criterion.name, value: inputValue}});
        };

        return (
            <TextField
                type="number"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleBlur}
                name={criterion.name}
                size="small"
                sx={numberInputStyles}
            />
        )
    };
    const renderFormField = (criterion) => {
        switch (criterion.type) {
            case "boolean":
                return (
                    <Switch
                        checked={state[criterion.name]}
                        onChange={(e) => handleChange(e, criterion.name)}
                        name={criterion.name}
                    />
                );
            case "number":
                return (
                    <NumberInput
                        criterion={criterion}
                        state={state}
                        handleChange={(e) => handleChange(e, criterion.name)}
                    />
                );
            case "select":
                return (
                    <Box sx={{marginLeft: '58px'}}/>
                );
            default:
                return null;
        }
    };
    const renderInfo = (cutoffs, score) => {
        for (const group of cutoffs) {
            if (score >= group.cutoff_value) {
                return group.info_text
            }
        }
    }
    const renderRecommendation = (cutoffs, score) => {
        for (const group of cutoffs) {
            if (score >= group.cutoff_value) {
                return group.info_recommendation
            }
        }
    }
    const renderColor = (cutoffs, score) => {
        for (const group of cutoffs) {
            if (score >= group.cutoff_value) {
                return group.mui_color
            }
        }
    }
    const renderValidationIcon = (criterionName) => (
        <IconButton onClick={() => handleIconClick(criterionName)}>
            {fieldState[criterionName] === 'modified'
                ? <TaskAltIcon color={'success'} />
                : <RadioButtonUncheckedIcon sx={{ color: 'grey.300' }} />
            }
        </IconButton>
    )

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5">{formData.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl component={"fieldset"} variant={"standard"}>
                    <FormGroup>
                        {formData.criterias.map((criterion) => (
                            <Grid container alignItems={'center'} key={criterion.name}>
                                <Grid item>
                                    {renderValidationIcon(criterion.name)}
                                </Grid>
                                <Grid>
                                    <FormControlLabel
                                        control={renderFormField(criterion)}
                                        label={criterion.question}
                                    />
                                </Grid>
                            </Grid>
                        ))}
                    </FormGroup>
                </FormControl>
            </AccordionDetails>
            <AccordionDetails>
                <Grid container spacing={2} alignItems={"center"}>
                    <Grid item xs={12} md={2}>
                        <Box sx={{
                            padding: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height:'100%'
                        }}>
                            <Typography variant={'h6'} alignItems={'center'}>Score: {score}p</Typography>
                            <LinearProgress
                                variant={'determinate'}
                                value={(score/formData.max_points)*100}
                                color={renderColor(formData.stratification, score)}
                                sx={{
                                    height: '6px',
                                    width: '95%'
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={10} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                        <Typography variant="subtitle">
                            {renderInfo(formData.stratification, score)}
                        </Typography>
                        <Typography variant="h5">
                            {renderRecommendation(formData.stratification, score)}
                        </Typography>
                    </Grid>
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}