import React from 'react';
import { makeStyles, createStyles, Theme, Box, Divider } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

import { EditMode } from './EditMode';
import { LinkMode } from './LinkMode';
import { LocaleMode } from './LocaleMode';
import { WorkflowMode } from './WorkflowMode';


const useStyles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    header: {
      display: 'flex',
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

const EditorToolbar: React.FC<EditorToolbarProps> = () => {
  const classes = useStyles();


  return (

    <Box className={classes.root} >
      <Box flexGrow="1" className={classes.header}>
        <LocaleMode />
        <WorkflowMode />
        <LinkMode />
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