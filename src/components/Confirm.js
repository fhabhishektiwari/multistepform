import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // process Form //Api Data
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
          </List>
          <List>
            <ListItem primaryText="Last Name" secondaryText={lastName} />
          </List>
          <List>
            <ListItem primaryText="Email" secondaryText={email} />
          </List>
          <List>
            <ListItem primaryText="Occupation" secondaryText={occupation} />
          </List>
          <List>
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <List>
            <ListItem primaryText="Bio" secondaryText={bio} />
          </List>
          <br />
          <RaisedButton
            label="Confirm & Continue"
            onClick={this.continue}
            primary={true}
            style={styles.button}
          />
          <RaisedButton
            label="Back"
            onClick={this.back}
            primary={false}
            style={styles.button}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;

const styles = {
  button: {
    margin: 15,
  },
};
