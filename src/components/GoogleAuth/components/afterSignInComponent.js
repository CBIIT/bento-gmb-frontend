import React from 'react';
import {
  Button, withStyles, Paper,
} from '@material-ui/core';

const AfterSignIn = ({
  classes, userName, signOutLink,
}) => {
  const [displayDropDownMenu, setDisplayDropDownMenu] = React.useState(false);

  function handleMoveIn() {
    setDisplayDropDownMenu(true);
  }

  function handleMoveOut() {
    setDisplayDropDownMenu(false);
  }

  return (
    <div
      onMouseEnter={handleMoveIn}
      onMouseLeave={handleMoveOut}
      className={classes.aboutMenu}
    >
      <Button
        clases={{ label: classes.logotype, text: classes.buttonRootNoRightPadding }}
        disableRipple
      >
        {userName}
      </Button>
      {displayDropDownMenu ? (
        <Paper>
          <Button
            onClick={signOutLink}
            classes={{ label: classes.textColor, text: classes.padding0 }}
            disableRipple
          >
            logout
          </Button>
        </Paper>
      ) : ''}
    </div>
  );
};

const styles = () => ({
  logotype: {
    whiteSpace: 'nowrap',
    color: '#FFFFFF',
    fontFamily: 'Nunito',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.9px',
    // [theme.breakpoints.down('xs')]: {
    //   display: 'none',
    // },
    '&:hover, &:focus': {
      borderRadius: '0',
    },
  },
  buttonRootNoRightPadding: {
    padding: '9px 0px 0px 20px',
  },
  buttonRootClicked: {
    borderBottom: '2px solid #FFFFFF',
  },
  dropDownicon: {
    fontSize: '18px',
    margin: '0px 0px 0px 0px',
  },
  paddding0: {
    paddding: '0px',
  },
  aboutMenu: {
    display: 'inline-block',
    height: '39px',
  },
  textColor: {
    color: '#ffffff',
    fontSize: '16px',
    textTrasform: 'normal',
    textTransform: 'capitalize',
  },
  paper: {
    background: '#465F96',
    width: '120px',
    paddingLeft: '20px',
    position: 'absolute',
    fontFamily: 'Nunito',
    fontWeight: 600,
    borderRadius: '0',
    marginTop: '6px',
  },
});

AfterSignIn.defaultProps = {
  navBarstyling: {},
};

export default withStyles(styles)(AfterSignIn);
