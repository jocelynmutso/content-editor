import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

import { API, Layout} from '../deps';


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
    iconButton: {
      color: theme.palette.primary.main,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }),
)();



interface EditorToolbarProps {

}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ }) => {
  const classes = useStyles();


  return (

    <Box display="flex" alignItems="center">
      <Box flexGrow="1" className={classes.header}>
        <Box flexGrow="1" />
        <IconButton aria-label="save" className={classes.iconButton}>
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="close" className={classes.iconButton}>
          <CloseIcon />
        </IconButton>

      </Box>
    </Box>
  )
}

export { EditorToolbar }