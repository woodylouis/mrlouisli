import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
//import green from '@material-ui/core/colors/green';
import themeColor from '../utility/theme';
import linkedinLogo from '../images/linkedin.png';
import githubLogo from '../images/github-logo.png';
import homeLogo from '../images/home.png';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing.unit * 2,
  },
});

// const smooth = () => ({
//     $('a').click(function(){
//       $('html, body').animate({
//           scrollTop: $( $(this).attr('href') ).offset().top
//       }, 500);
//       return false;
//   })
// })

class MenuListComposition extends React.Component {
  state = {
    open: false,
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div>
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
          >
            <p style={{color: themeColor.palette.primary.light}}>Something About me</p>
          </Button>
          <Popper open={open} anchorEl={this.anchorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                id="menu-list-grow"
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList autoFocus="true">
                      <MenuItem onClick={this.handleClose}><a href="https://github.com/woodylouis" target="_blank" rel="noopener noreferrer"><img src={githubLogo} alt="Louis Github" width="40px" height="40px"/></a></MenuItem>
                      <MenuItem onClick={this.handleClose}><a href="https://github.com/woodylouis" target="_blank" rel="noopener noreferrer"><img src={linkedinLogo} alt="Louis Linkedin" width="40px" height="40px"/></a></MenuItem>
                      {/* <MenuItem onClick={this.handleClose}><a href="#background">background</a></MenuItem> */}

                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuListComposition);
