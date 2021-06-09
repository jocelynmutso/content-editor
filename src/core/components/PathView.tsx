import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100ch',
      },
    },
  }),
);

interface PathViewProps {
  
}

const PathView: React.FC<PathViewProps> = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Path View" variant="outlined" />
    </form>
  );
}

export { PathView }
