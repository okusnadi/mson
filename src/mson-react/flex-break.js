import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  break: {
    flexBasis: '100%',
    width: '0px',
    height: '0px',
    overflow: 'hidden'
  }
});

class FlexBreak extends React.Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.break} />;
  }
}

export default withStyles(styles)(FlexBreak);
