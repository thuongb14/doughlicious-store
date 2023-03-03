import Grid from "@mui/system/Unstable_Grid/Grid";
import { Paper } from "@mui/material";
import InformationStep from "./InformationStep";
import { useState } from "react";
import PaymentStep from "./PaymentStep";
import ReviewCart from "./ReviewCart";
import OrderPlaced from "./OrderPlaced"
export default function CheckOut(props) {
  const steps = [
    "Information Details",
    "Payment details",
    "Your order has been placed!",
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const switchStep = () => {
    switch (activeStep) {
      case 0:
        return (
          <Grid container component="main" sx={{ height: "100vh" }}>
            <InformationStep
              steps={steps}
              handleNext={handleNext}
              activeStep={activeStep}
            />
            <Grid item xs={12} md={3} component={Paper} elevation={5} square>
              <ReviewCart total={props.total.toFixed(2)} cart={props.cart} />
            </Grid>
          </Grid>
        );
      case 1:
        return (
          <Grid container component="main" sx={{ height: "100vh" }}>
            <PaymentStep
              steps={steps}
              handleBack={handleBack}
              handleNext={handleNext}
              activeStep={activeStep}
            />
            <Grid item xs={12} md={3} component={Paper} elevation={5} square>
              <ReviewCart total={props.total.toFixed(2)} cart={props.cart} />
            </Grid>
          </Grid>
        );
      case 2:
        return <OrderPlaced removeAllFromCart={props.removeAllFromCart}/>;
      default:
        throw new Error("Unknown step");
    }
  };

  return <div>{switchStep()}</div>;
}
