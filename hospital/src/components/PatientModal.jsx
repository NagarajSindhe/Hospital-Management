import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import AddPatients from "./AddPatients";
/* import { Paper } from "@material-ui/core";
import Grid from "@material-ui/core/Grid"; */

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
    width: theme.spacing.unit * 100,
    overflow: "auto",
    /* maxWidth: 400, */
    backgroundColor: theme.palette.background.paper,
    outline: 1,
    flexGrow: 1,
    height: "100%"
  }
});

class PatientModal extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <Button
          aria-owns={open ? "simple-popper" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{ float: "left" }}
          className="bg-primary text-white"
        >
          Add Patients
        </Button>
        <Popover
          id="simple-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
        >
          <Typography className="bg-primary text-white">
            <h3 style={{ marginLeft: "44px", height: 50, paddingTop: 10 }}>
              Add Patient Details
            </h3>
          </Typography>
          <Typography className={classes.typography}>
            <AddPatients className="bg-primary" />
          </Typography>
        </Popover>
      </div>
    );
  }
}

PatientModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PatientModal);
