import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '20vw',
        align: 'center'
      },
    },
  }),
);

interface EditModeButtonProps {
  
}

const EditModeButton: React.FC<EditModeButtonProps> = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        Edit
      </Button>
    </div>
  );
}

export { EditModeButton }
  


