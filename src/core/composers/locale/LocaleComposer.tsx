import React from 'react';
import { makeStyles, createStyles, Theme, TextField, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '98%',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
    },
    input: {
      margin: theme.spacing(1),
      padding: 0,
      minWidth: '10ch',
      backgroundColor: theme.palette.background.paper
    },
  }),
);




interface LocaleComposerProps {
  site: API.CMS.Site;
}


const LocaleComposer: React.FC<LocaleComposerProps> = ({ site }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [locale, setLocale] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <div className={classes.root}>
      <Button onClick={handleClickOpen} size="small">Create</Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Create a new locale"} </DialogTitle>
        <TextField className={classes.input} helperText="Two-letter locale code" placeholder="en" variant="outlined" />
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}

export { LocaleComposer }

