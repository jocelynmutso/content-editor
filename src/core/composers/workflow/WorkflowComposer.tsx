import React from 'react';
import { makeStyles, createStyles, Theme, InputLabel, FormControl, TextField } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API } from '../../deps';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    },
    heading: {
      fontWeight: 'bold',
    },
  }),
);

interface WorkflowComposerProps {
  site: API.CMS.Site,
}


const WorkflowComposer: React.FC<WorkflowComposerProps> = ({ site }) => {
  const classes = useStyles();
  const [locale, setLocale] = React.useState('');
  const [workflow, setWorkflow] = React.useState('');


  const workflows: API.CMS.Workflow[] = Object.values(site.workflows);
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <Typography className={classes.heading}>
      <FormControl variant="outlined" className={classes.select} fullWidth>
        <InputLabel>Locale</InputLabel>
        <Select
          onChange={({ target }) => setLocale(target.value as any)}
          value={locale}
          label="Locale"
        >
          {locales.map((locale, index) => (
            <MenuItem key={index} value={locale.value}>{locale.value}</MenuItem>
          ))}
        </Select>

      </FormControl>
      <FormControl variant="outlined" className={classes.select} fullWidth>
        <InputLabel>Workflow</InputLabel>
        <Select
          onChange={({ target }) => setWorkflow(target.value as any)}
          value={workflow}
          label="workflow"
        >
          {workflows.map((workflow, index) => (
            <MenuItem key={index} value={workflow.name}>{workflow.name}</MenuItem>
          ))}
        </Select>

      </FormControl>
      <TextField className={classes.select} label="Localised Name" variant="outlined" placeholder="Permit application form" helperText="Name to be displayed to users" fullWidth />

    </Typography>

  );
}

export { WorkflowComposer }