import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      "&:hover": {
         color: theme.palette.error.dark,
         backgroundColor: theme.palette.background.default,
      },
      margin: theme.spacing(2),
    },
  }),
);

interface DeletePathButtonProps {

}


const DeletePathButton: React.FC<DeletePathButtonProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
      <DeleteIcon />
        Delete path
      </Button>
    </div>
  );
}

export { DeletePathButton }
