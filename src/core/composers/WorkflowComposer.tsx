import React from 'react';
import { makeStyles, createStyles, Theme, Box, TextField, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API, Layout } from '../deps';

import { WorkflowsTable } from './WorkflowsTable';


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
    select: {
      marginRight: theme.spacing(1),
      minWidth: '15ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      marginRight: theme.spacing(1),
      minWidth: '50ch',
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

interface WorkflowComposerProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}


const WorkflowComposer: React.FC<WorkflowComposerProps> = ({ site, article }) => {
  const classes = useStyles();

  const [type, setType] = React.useState('');
  const [locale, setLocale] = React.useState('');

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  const handleLocaleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as string);
  };

  const workflows: API.CMS.Workflow[] = Object.values(site.workflows).filter(workflow => article.id === workflow.article);

  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /> </IconButton>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Add workflow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <TextField className={classes.formControl} id="outlined-basic" label="Technical name" variant="outlined" />
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel id="demo-simple-select-outlined-label">Locale</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={locale}
                onChange={handleLocaleChange}
                label="Age"
              >
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>FI</MenuItem>
                <MenuItem value={20}>SV</MenuItem>
              </Select>
            </FormControl >
          <TextField className={classes.formControl} id="outlined-basic" label="Localised name" variant="outlined" />
          </Typography>
        </AccordionDetails>
      </Accordion>
      { workflows.length === 0 ? null : <WorkflowsTable site={site} article={article} />}
    </div>
  );
}

export { WorkflowComposer }