import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  primary: {
    marginRight: theme.spacing.unit * 2
  },
  secondary: {
    background: theme.palette.secondary['100'],
    color: 'white'
  },
  spaceTop: {
    marginTop: 20
  }
})

class ButtonBarEdit extends Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        <Button
          type="reset"
          className={classes.primary}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={classes.secondary}
        >
          Save
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBarEdit);
