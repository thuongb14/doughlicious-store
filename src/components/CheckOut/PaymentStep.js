import Grid from "@mui/system/Unstable_Grid/Grid";
import { styled } from "@mui/material/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  Typography,
} from "@mui/material";

export default function PaymentStep(props) {
  const steps = props.steps;

  return (
    <Grid
      style={{ fontFamily: "Montserrat", padding: "2rem" }}
      item
      xs={12}
      md={9}
    >
      <Title>DOUGHLICIOUS</Title>
      <CustomStepper activeStep={props.activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </CustomStepper>
      <Heading>Payment Method</Heading>

      <Grid style={{ padding: "2rem 5rem" }} container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
      <Button
        onClick={() => props.handleBack()}
        sx={{ mt: 3, ml: 1 }}
      >
        Return to Information
      </Button>
      <Button
        variant="contained"
        onClick={() => props.handleNext()}
        sx={{ mt: 3, ml: 1 }}
      >
        Pay Now
      </Button>
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

const Heading = styled(Typography)({
  fontSize: "20px",
  marginBottom: "1rem",
});
