import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import DescriptionIcon from '@material-ui/icons/Description';
import ButtonBar from '../buttons/ButtonBar';
import ButtonBarEdit   from '../buttons/ButtonBarEdit';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  avatar: {
    margin: 10,
    backgroundColor: theme.palette.grey['200'],
    color: theme.palette.text.primary,
  },
  avatarContainer: {
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginBottom: theme.spacing.unit * 4
    }
  },
  itemContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  baseline: {
    alignSelf: 'baseline',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      alignItems: 'center',
      width: '100%',
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit * 2,
      marginLeft: 0
    }
  },
  inline: {
    display: 'inline-block',
    marginLeft: theme.spacing.unit * 4,
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0
    }
  },
  inlineRight: {
    width: '30%',
    textAlign: 'right',
    marginLeft: 50,
    alignSelf: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 0,
      textAlign: 'center'
    }
  },
  backButton: {
    marginRight: theme.spacing.unit * 2
  }
})

class MatchItem extends Component {

  constructor(props) {
    super(props);
    this.state = {item: props.olicoMatchItem, edit: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteRequest = this.deleteRequest.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange(event) {
    this.setState({item:{_user: event.target.value}});
  }

  handleSubmit(event) {
    //console.log('handleSubmit: ', event.target)
    console.log('handleSubmit: ', Array.from(event.target).reduce(function(bucket, item){
      if (item.nodeName === 'INPUT'){
        bucket.push(item)
      }
      return bucket
    }, []))
    this.props.saveRequest(event)
  }

  deleteRequest() {
    this.props.deleteRequest(this.state.item)
  }

  handleReset(event) {
    console.log('handleReset: ', event.target)
    this.setState((state) => ({
      edit: false
    }))
    event.preventDefault();
  }

  editRequest = (event) => {
    console.log('edit request on MatchItem event is ', event)
    this.setState((state) => ({
      edit: true
    }))
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>



      { !this.state.edit ?


        <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
            <div className={classes.avatarContainer}>
              <Avatar className={classes.avatar}>
                <DescriptionIcon />
              </Avatar>
            </div>
            <div className={classes.baseline}>
              <div className={classes.inline}>
                <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                  user name
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {this.state.item._user}
                </Typography>
              </div>
            </div>
            <div className={classes.inlineRight}>
              <Typography style={{ textTransform: 'uppercase' }} color='secondary' gutterBottom>
                Other Amount
              </Typography>
              <Typography variant="h4" gutterBottom>
                Once a month
              </Typography>
              <ButtonBar hanldeEdit={this.editRequest} hanldeDelete={this.deleteRequest}/>
            </div>
          </div>
        </Paper>


        :

        <Paper className={classes.paper}>
          <div className={classes.itemContainer}>
            <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
              <Typography variant="h6" gutterBottom>
                <label>
                  Name:
                  <input type="text" value={this.state.item._user} onChange={this.handleChange} />
                </label>
              </Typography>
              <ButtonBarEdit/>
            </form>
          </div>
        </Paper>

      }




      </div>
    )
  }
}

export default withStyles(styles)(MatchItem);
