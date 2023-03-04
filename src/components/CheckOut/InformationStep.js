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
import StorefrontIcon from "@mui/icons-material/Storefront";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

export default function InformationPath(props) {
  const steps = props.steps;
  const [value, setValue] = useState("delivery");
  const containerStyle = {
    width: "100%",
    height: "600px",
  };
  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       console.log(position.coords.latitude)
  //     });
  //   } else {
  //     console.log(null);
  //   }
  // };

  const center = {
    lat: -37.815018,
    lng: 144.946014,
  };

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
        <div>
          <p>Unfortunately we don't have any store near you</p>
          <LoadScript
            style={{ width: "100%", height: "600px" }}
            googleMapsApiKey="AIzaSyASjngk4iHnVI1MJj2619tkKNaVAGj3XCs"
          >
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          </LoadScript>
        </div>
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
