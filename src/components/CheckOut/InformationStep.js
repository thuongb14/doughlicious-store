import Grid from "@mui/system/Unstable_Grid/Grid";
import { styled } from "@mui/material/styles";
import { Stepper, Step, StepLabel, Button } from "@mui/material";

export default function InformationPath(props) {
  const steps = props.steps;
  return (
    <Grid item xs={12} md={9}>
      <Title>DOUGHLICIOUS</Title>
      <CustomStepper activeStep={props.activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>
      information step
      <Button
        variant="contained"
        onClick={() => props.handleNext()}
        sx={{ mt: 3, ml: 1 }}
      >Next</Button>
    </Grid>
  );
}

const Title = styled("div")({
  margin: "2rem 0",
  color: "pink",
  fontSize: "40px",
  fontFamily: "Titan One",
});

const CustomStepper = styled(Stepper)({
  padding: "3rem",
});
