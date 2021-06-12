import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: '10vw',
      "&:hover": {
         color: theme.palette.error.dark,
         backgroundColor: theme.palette.background.default,
         borderColor: theme.palette.error.dark,
      },
      margin: theme.spacing(1),
    },
  }),
);

interface DeleteModeProps {

}


const DeleteMode: React.FC<DeleteModeProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <Button variant="outlined" className={classes.button}>
      <DeleteIcon />
        Delete Path
      </Button>
    </div>
  );
}

export { DeleteMode }
