import React from 'react';
import { makeStyles, createStyles, Theme, TextField, Typography } from '@material-ui/core';
import { API } from '../../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    heading: {
      fontWeight: 'bold',
    },
  }),
);

interface ReleaseComposerProps {
  site: API.CMS.Site,
  releases: API.CMS.Releases,
}


const ReleaseComposer: React.FC<ReleaseComposerProps> = ({ site, releases }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.heading}>
      <TextField className={classes.formControl} id="outlined-basic" label="Tag" variant="outlined" fullWidth />
      <TextField className={classes.formControl} id="outlined-basic" label="Note" variant="outlined" fullWidth />
      <TextField className={classes.formControl} disabled id="outlined-basic" label="Date" defaultValue={new Date().toISOString()} variant="outlined" fullWidth />
    </Typography>
  );
}

export { ReleaseComposer }