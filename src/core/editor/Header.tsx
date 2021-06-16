import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1),
      fontWeight: 'bold',
      backgroundColor: theme.palette.secondary.dark
    },
    deleteIcon: {
      color: theme.palette.error.dark,
    },
    saveIcon: {
      color: theme.palette.primary.main,
    },
    cancelIcon: {
      color: theme.palette.text.primary
    }

  }),
)();



interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();

  return (

    <Box display="flex" alignItems="center">
      <Box flexGrow="1" className={classes.header}>
        LOCALE
         <Box flexGrow="1" />
        <IconButton aria-label="save">
          <SaveIcon className={classes.saveIcon} />
        </IconButton>
        <IconButton aria-label="cancel">
          <CloseIcon className={classes.cancelIcon} />
        </IconButton>

      </Box>
    </Box>
  )
}

export { Header }