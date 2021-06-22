import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog, { DialogProps } from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { API } from '../';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      width: '75wv'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: 'auto',
      width: 'fit-content',
    },
    formControl: {
      marginTop: theme.spacing(2),
      minWidth: 'fit-content',
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
  }),
);
interface LinkEditorProps {
  link: API.Link | undefined,
  handleClose:() => void
}

const LinkEditor: React.FC<LinkEditorProps> = ({ link, handleClose }) => {
  const classes = useStyles();

  if(link === undefined) {
    return null
  }

  return (
    <div>
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Edit link</DialogTitle>

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Exit without saving
          </Button>
          <Button onClick={handleClose} color="primary">
            Save and exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { LinkEditor }