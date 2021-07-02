import React from 'react';
import { makeStyles, createStyles, Theme, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API } from '../deps';

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
    selectSmall: {
      marginRight: theme.spacing(1),
      minWidth: '15ch',
      backgroundColor: theme.palette.background.paper
    },
    selectLarge: {
      marginRight: theme.spacing(1),
      minWidth: '50ch',
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
  const [locale, setLocale] = React.useState('');

  const handleLocaleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as string);
  };

  const workflows: API.CMS.Workflow[] = Object.values(site.workflows).filter(workflow => article.id === workflow.article);

  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /> </IconButton>}
        >
          <Typography className={classes.heading}>Add workflow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.selectLarge}>
              <InputLabel >Workflow</InputLabel>
              <Select
                value={locale}
                onChange={handleLocaleChange}
                label="Workflow"
              >
                <MenuItem value={10}>None</MenuItem>
                <MenuItem value={10}>Flow 1</MenuItem>
                <MenuItem value={20}>MyForm</MenuItem>
                <MenuItem value={20}>GeneralTopics</MenuItem>
              </Select>
            </FormControl >
            <FormControl variant="outlined" className={classes.selectSmall}>
              <InputLabel>Locale</InputLabel>
              <Select
                value={locale}
                onChange={handleLocaleChange}
                label="Locale"
              >
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>FI</MenuItem>
                <MenuItem value={20}>SV</MenuItem>
              </Select>
            </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
      { workflows.length === 0 ? null : <WorkflowsTable site={site} article={article} />}
    </div>
  );
}

export { WorkflowComposer }