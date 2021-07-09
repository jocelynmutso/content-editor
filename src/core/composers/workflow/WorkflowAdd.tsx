import React from 'react';
import { makeStyles, createStyles, Theme, Divider, InputLabel, FormControl, IconButton } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { WorkflowTable } from './WorkflowTable';
import { AddButton } from '../styles';
import { API } from '../../deps';


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
    selectBig: {
      marginRight: theme.spacing(1),
      minWidth: '100ch',
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

interface WorkflowAddProps {
  site: API.CMS.Site,
  article: API.CMS.Article
}


const WorkflowAdd: React.FC<WorkflowAddProps> = ({ site, article }) => {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [locale, setLocale] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleLocaleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as string);
  };

  const handleWorkflowChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLink(event.target.value as string);
  };

  const workflows: API.CMS.Workflow[] = Object.values(site.workflows);


  return (
    <div className={classes.root}>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /> </IconButton>}
        >
          <Typography className={classes.heading}>Add a Workflow</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel>Locale</InputLabel>
              <Select
                value={locale}
                onChange={handleLocaleChange}
                label="locale"
              >
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>FI</MenuItem>
                <MenuItem value={20}>SV</MenuItem>
              </Select>
            </FormControl >


            <FormControl variant="outlined" className={classes.selectBig}>
              <InputLabel>Workflow</InputLabel>
              <Select
                value={link}
                onChange={handleWorkflowChange}
                label="Workflow">
                {workflows.map((workflow, index) => (<MenuItem key={index} value={10}>{workflow.content}</MenuItem>))}</Select>
            </FormControl >
          </Typography>
          <AddButton />
        </AccordionDetails>
      </Accordion>
      <WorkflowTable site={site} article={article} />
    </div>
  );
}

export { WorkflowAdd }