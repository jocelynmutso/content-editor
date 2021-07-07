import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles, createStyles, Theme, ListItem } from '@material-ui/core';

import { API } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      padding: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
      }
    },
    margin: {
      marginRight: theme.spacing(1)
    }
  }),
);


interface DeleteAlertProps {
  site: API.CMS.Site;
  article: API.CMS.Article;
}

const DeleteAlert: React.FC<DeleteAlertProps> = ({site, article}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.margin}>
      <Button variant="outlined" className={classes.button} onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Delete this article?"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ListItem>* Content files associated with this article will be permanently deleted.</ListItem>
            <ListItem>* Deleting this article will NOT delete its links and workflows</ListItem>
            <ListItem>* Links and workflows must be deleted globally via toolbar menu actions. </ListItem>
            <ListItem>* Deletion of this article cannot be undone!</ListItem>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Continue and delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export { DeleteAlert }
