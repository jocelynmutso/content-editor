import React from 'react';
import { makeStyles, createStyles, Theme, TextField, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { Create } from '../buttons';
import { ReleasesTable } from './ReleasesTable';
import { API } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '98%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    accordion: {
      backgroundColor: theme.palette.info.light
    },
    formControlSmall: {
      marginRight: theme.spacing(1),
      minWidth: '30ch',
      backgroundColor: theme.palette.background.paper
    },
    formControlLarge: {
      marginRight: theme.spacing(1),
      minWidth: '75ch',
      backgroundColor: theme.palette.background.paper
    },
    heading: {
      fontWeight: 'bold',
    },
    iconButton: {
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }),
);

interface ReleaseComposerProps {
  site: API.CMS.Site,
  releases: API.CMS.Releases;
}


const ReleaseComposer: React.FC<ReleaseComposerProps> = ({ site, releases }) => {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /> </IconButton>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Make a release</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <TextField className={classes.formControlSmall} id="outlined-basic" label="Tag" variant="outlined" />
            <TextField className={classes.formControlLarge} id="outlined-basic" label="Note" variant="outlined" />
            <TextField className={classes.formControlSmall} disabled id="outlined-basic" label="Date" defaultValue={"03/09/2021"} variant="outlined" />
          </Typography>
          <Create />
        </AccordionDetails>
      </Accordion>
      {releases.length === 0 ? null : <ReleasesTable site={site} releases={releases} />}
    </div>
  );
}

export { ReleaseComposer }