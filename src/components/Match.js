import React,  { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import MatchItem from './cards/MatchItem';
import Topbar from './Topbar';
import SectionHeader from './typo/SectionHeader';
const backgroundShape = require('../images/shape.svg');

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.grey['A500'],
    overflow: 'hidden',
    background: `url(${backgroundShape}) no-repeat`,
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 20,
    padding: 20,
    paddingBottom: 200
  },
  grid: {
    width: 1000
  }
})

const MatchItems = [
  {
  	"_id" : "5cb1d6912f3e499d95be0126",
  	"provide" : {
  		"_item" : "5cb1d6919fa07b471bf54bca"
  	},
  	"consume" : [
  		"any"
  	],
  	"location" : {
  		"type" : "Point",
  		"coordinates" : [
  			0,
  			0
  		],
  		"contact" : [ ],
  		"hook" : [ ]
  	},
  	"timeWindow" : {
  		"provide" : {
  			"from" : "2019-04-13T12:31:13.927Z",
  			"to" : "2019-04-13T12:31:13.927Z"
  		},
  		"consume" : {
  			"from" : "2019-04-13T12:31:13.927Z",
  			"to" : "2019-04-13T12:31:13.927Z"
  		},
  		"hook" : [ ]
  	},
  	"status" : {
  		"_pointer" : "5cb1d6919fa07b471bf54bc9",
  		"flag" : "open",
  		"contact" : [ ],
  		"hook" : [ ]
  	},
  	"hook" : [ ],
  	"_user" : "john"
  },
  {
  	"_id" : "5cb1d6912f3e499d95be0126",
  	"provide" : {
  		"_item" : "5cb1d6919fa07b471bf54bca"
  	},
  	"consume" : [
  		"any"
  	],
  	"location" : {
  		"type" : "Point",
  		"coordinates" : [
  			0,
  			0
  		],
  		"contact" : [ ],
  		"hook" : [ ]
  	},
  	"timeWindow" : {
  		"provide" : {
  			"from" : "2019-04-13T12:31:13.927Z",
  			"to" : "2019-04-13T12:31:13.927Z"
  		},
  		"consume" : {
  			"from" : "2019-04-13T12:31:13.927Z",
  			"to" : "2019-04-13T12:31:13.927Z"
  		},
  		"hook" : [ ]
  	},
  	"status" : {
  		"_pointer" : "5cb1d6919fa07b471bf54bc9",
  		"flag" : "open",
  		"contact" : [ ],
  		"hook" : [ ]
  	},
  	"hook" : [ ],
  	"_user" : "ale3"
  }
]

class Match extends Component {

  constructor(props) {
    super(props);
    this.items = MatchItems
  }

  saveRequest = (event) => {
      console.log('save request on Match event is ', event)
      event.preventDefault();
  }

  deleteRequest = (item) => {
      console.log('delete request on Match index is ', item)
      console.log('index of item is ', MatchItems.indexOf(item))
      MatchItems.splice(MatchItems.indexOf(item), 1)
  }

  render() {
    const { classes } = this.props;
    const currentPath = this.props.location.pathname

    return (
      <React.Fragment>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <SectionHeader title="Match" subtitle="These are the posible matches for the selected filters" />
              </Grid>
              {MatchItems.map((item, index) => (
                <Grid item xs={12} key={index}>
                  <MatchItem saveRequest={this.saveRequest} deleteRequest={this.deleteRequest} olicoMatchItem={item}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Match);
