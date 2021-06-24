import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        marginLeft: 0,
        marginBottom: theme.spacing(3),
        width: '20vw',
        backgroundColor: theme.palette.info.main
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
      <Button variant="contained" color="primary">
        Preview
      </Button>
    </div>
  );
}

export { EditModeButton }



