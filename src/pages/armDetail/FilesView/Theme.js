export const tblHeader = {
  MuiTableSortLabel: {
    root: {
      color: '#13344A',
      position: 'relative',
      fontSize: '11pt',
      fontFamily: 'Lato Regular,Raleway, sans-serif',
      fontWeight: 'bold',
      letterSpacing: '0.06em',
      textDecoration: 'none',
      '&:hover': {
        color: '#13344A',
      },
    },
  },
};

export const displayPgn = {
  MuiTablePagination: {
    root: {
      paddingRight: '50px',
      borderTop: '5px solid #e7e5e5',
      borderBottom: '3px solid #e7e5e5',
    },
    toolbar: {
      minHeight: '45px',
    },
    input: {
      background: '#fff',
    },
  },
};

export const hidePgn = {
  MuiTablePagination: {
    root: {
      display: 'none',
    },
  },
};

export const displayErr = {
  MuiTypography: {
    root: {
      color: '#004c73',
      fontSize: '1rem',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.00938em',
    },
  },
};

export const themeConfig = {
  tblHeader,
  displayErr,
};

/**
* wrapper theme config
*/
export const wrapperThemConfig = {
  MuiContainer: {
    root: {
      textAlign: 'right',
      paddingTop: '14px',
      paddingBottom: '40px',
    },
  },
  MuiButton: {
    root: {
      width: '156px',
      lineHeight: '30px',
      fontSize: '12px',
      marginTop: '6px',
      marginLeft: '5px',
      marginBottom: '10px',
      marginRight: '4px',
      color: '#fff',
      fontFamily: 'Lato',
      borderRadius: '10px',
      textTransform: 'uppercase',
      '&.add_selected_button': {
        backgroundColor: '#10a075',
      },
      '&.Mui-disabled': {
        color: '#fff',
        '&.add_selected_button': {
          backgroundColor: '#10a075',
          opacity: '0.3',
        },
      },
    },
  },
};