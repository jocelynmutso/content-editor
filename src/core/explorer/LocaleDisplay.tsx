import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'left',
    },
  }),
);

interface LocaleDisplayProps {

}

const LocaleDisplay: React.FC<LocaleDisplayProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        <Button>FI</Button>
        <Button>SV</Button>
        <Button>EN</Button>
      </ButtonGroup>

    </div>
  )
}




export { LocaleDisplay }
