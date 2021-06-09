import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        
        backgroundColor: theme.palette.background.paper,
        borderRadius: 5,
      },
    },
  }),
);

interface PathViewProps {
  
}

const PathView: React.FC<PathViewProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField id="outlined-basic" label="Path View" variant="outlined" />
    </div>
  );
}

export { PathView }
