import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '10vw',
      },
    },
  }),
);

interface NewPathButtonProps {

}

const NewPathButton: React.FC<NewPathButtonProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary">
        New Path
      </Button>
    </div>
  );
}

export { NewPathButton }



