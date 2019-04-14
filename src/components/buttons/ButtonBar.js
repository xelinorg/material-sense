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

class ButtonBar extends Component {

  handleEditClick = (e) => {
    this.props.hanldeEdit(e)
  }

  handleDeleteClick = (e) => {
    this.props.hanldeDelete(e)
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.spaceTop}>
        <Button
          className={classes.primary}
          onClick={this.handleDeleteClick}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.secondary}
          onClick={this.handleEditClick}
        >
          Edit
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(ButtonBar);
