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

    },
    dialog: {
      padding: theme.spacing(3)
    },
    form: {
      margin: 'auto',
    },
    formControl: {
      marginTop: theme.spacing(2),
    },
    formControlLabel: {
      marginTop: theme.spacing(1),
    },
    viewButton: {
      color: theme.palette.secondary.main,
      fontWeight: 'bold',
      "&:hover": {
        color: theme.palette.background.default,
        backgroundColor: theme.palette.info.main,
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }
  }),
);
interface LinkEditorProps {
  link: API.Link | undefined,
  handleClose: () => void
}

const LinkEditor: React.FC<LinkEditorProps> = ({ link, handleClose }) => {
  const classes = useStyles();

  if (link === undefined) {
    return null
  }

  return (
    <div>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={true}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Edit link</DialogTitle>
        <div className={classes.dialog}>
          Description: {link.description}
        </div>
        <div className={classes.dialog}>
          Path: {link.path}
        </div>
        <div className={classes.dialog}>
          Type: {link.type}
        </div>
        <div className={classes.dialog}>
          Value: {link.value}
        </div>
        <div className={classes.dialog}>
          Locale: {link.locale}
        </div>



        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Exit without saving
          </Button>
          <Button onClick={handleClose} color="primary" className={classes.viewButton}>
            Save and exit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { LinkEditor }