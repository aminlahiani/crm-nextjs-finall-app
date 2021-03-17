import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import MailOutline from "@material-ui/icons/MailOutline";
import Check from "@material-ui/icons/Check";
import Clear from "@material-ui/icons/Clear";
import Contacts from "@material-ui/icons/Contacts";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

// layout for this page
import Admin from "layouts/Admin1.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/nextjs-material-dashboard-pro/views/regularFormsStyle";

function RegularForms() {
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChangeEnabled = (event) => {
    setSelectedEnabled(event.target.value);
  };
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  return (
    
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <MailOutline />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Stacked Form</h4>
          </CardHeader>
          <CardBody>
            <form>
            <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Email adress"
                id="email_adress"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "email",
                }}
              />
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "password",
                  autoComplete: "off",
                }}
              />
            
              <Button color="rose">Submit</Button>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
              <CustomInput
                labelText="Email adress"
                id="email_adress"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "email",
                }}
              />
              <CustomInput
                labelText="Password"
                id="password"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "password",
                  autoComplete: "off",
                }}
              />
            
              <Button color="rose">Submit</Button>
              </GridItem>
              </GridContainer>
            </form>
          </CardBody>
        </Card>
     
  );
}

RegularForms.layout = Admin;

export default RegularForms;
