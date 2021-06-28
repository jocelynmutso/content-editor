import React from 'react';
import { makeStyles, createStyles, Theme, Box, Divider, ButtonGroup } from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

import LinkIcon from '@material-ui/icons/Link';
import LanguageIcon from '@material-ui/icons/Language';
import WorkIcon from '@material-ui/icons/Work';


const useStyles = () => makeStyles((theme: Theme) =>
  createStyles({
    root: {
    },
    header: {
      // backgroundColor: theme.palette.secondary.dark
    },
    iconButton: {
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
    buttonGroup: {
      margin: theme.spacing(1)
    },
    divider: {
      width: '1px'
    }
  }),
)();



interface EditorToolbarProps {

}

const EditorToolbar: React.FC<EditorToolbarProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <Box display="flex">
        <Box flexGrow="1" />
        <ButtonGroup variant="outlined" className={classes.buttonGroup} >
          <IconButton aria-label="Locale1" className={classes.iconButton}>
            <LanguageIcon />
          </IconButton>
          <IconButton aria-label="Locale2" className={classes.iconButton}>
            <LanguageIcon />
          </IconButton>
          <IconButton aria-label="save" className={classes.iconButton}>
            <LinkIcon />
          </IconButton>
          <IconButton aria-label="save" className={classes.iconButton}>
            <WorkIcon />
          </IconButton>
          <IconButton aria-label="save" className={classes.iconButton}>
            <SaveIcon />
          </IconButton>
          <IconButton aria-label="close" className={classes.iconButton}>
            <CloseIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
    </div>

  )
}

export { EditorToolbar }