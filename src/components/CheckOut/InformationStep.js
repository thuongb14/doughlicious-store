import Grid from "@mui/system/Unstable_Grid/Grid";
import { styled } from "@mui/material/styles";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  TextField,
  Typography,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl,
} from "@mui/material";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";

export default function InformationPath(props) {
  const steps = props.steps;
  const [value, setValue] = useState("delivery");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
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
      <Box style={{ textAlign: "left", padding: "2rem 5rem" }} component="form">
        <Heading>Contact Information</Heading>
        <TextField
          style={{ width: "100%" }}
          type="text"
          label="Email Address"
          variant="outlined"
          placeHolder="Email Address"
        />
      </Box>
      <Box style={{ textAlign: "left", padding: "2rem 5rem" }} component="form">
        <Heading>Delivery Method</Heading>
        <FormControl>
          <RadioGroup value={value} onChange={handleChange}>
            <FormControlLabel
              value="delivery"
              control={<Radio />}
              label={
                <Box component="span" display="flex" alignItems="center">
                  <LocalShippingIcon style={{ marginRight: "10px" }} />
                  Home Delivery
                </Box>
              }
            />
            <FormControlLabel
              value="pickup"
              control={<Radio />}
              label={
                <Box component="span" display="flex" alignItems="center">
                  <StorefrontIcon style={{ marginRight: "10px" }} />
                  Store Pick up
                </Box>
              }
            />
          </RadioGroup>
        </FormControl>
      </Box>
      {value === "pickup" ? (
        <p>Unfortunately we don't have any store near you.</p>
      ) : (
        <Box
          style={{ textAlign: "left", padding: "2rem 5rem" }}
          component="form"
        >
          <Heading>Delivery Address</Heading>
          <Grid
            container
            style={{ width: "100%", marginBottom: "10px" }}
            spacing={2}
          >
            <Grid item xs={6} spacing={2}>
              <TextField
                style={{ width: "100%" }}
                type="text"
                label="First Name"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                style={{ width: "100%" }}
                type="text"
                label="Last Name"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <TextField
            style={{ width: "100%", marginBottom: "1rem" }}
            type="text"
            label="Address"
            variant="outlined"
          />
          <TextField
            style={{ width: "100%", marginBottom: "1rem" }}
            type="text"
            label="Apartment, suite, etc. (optional)"
            variant="outlined"
          />
          <Grid container style={{ width: "100%" }} spacing={2}>
            <Grid item xs="4">
              <TextField
                style={{ width: "100%" }}
                type="text"
                label="City"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                style={{ width: "100%" }}
                type="text"
                label="State/territory"
                variant="outlined"
              />
            </Grid>
            <Grid item xs="4">
              <TextField
                style={{ width: "100%" }}
                type="text"
                label="Postcode"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Box>
      )}

      {value === "pickup" ? (
        ""
      ) : (
        <Button
          variant="contained"
          onClick={() => props.handleNext()}
          sx={{ mt: 3, ml: 1 }}
        >
          Continue to Payment
        </Button>
      )}
    </Grid>
  );
}

const Heading = styled(Typography)({
  fontSize: "20px",
  marginBottom: "1rem",
});

const Title = styled("div")({
  margin: "2rem 0",
  color: "pink",
  fontSize: "40px",
  fontFamily: "Titan One",
});

const CustomStepper = styled(Stepper)({
  padding: "3rem",
});
