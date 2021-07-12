import React from 'react';
import { makeStyles, createStyles, Theme, InputLabel, Button, FormControl, TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

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
    selectSmall: {
      margin: theme.spacing(1),
      minWidth: '15ch',
      backgroundColor: theme.palette.background.paper
    },
    selectLarge: {
      margin: theme.spacing(1),
      minWidth: '50ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      margin: theme.spacing(1),
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
}


const WorkflowComposer: React.FC<WorkflowComposerProps> = ({ site }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [locale, setLocale] = React.useState('');
  const [workflow, setWorkflow] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const workflows: API.CMS.Workflow[] = Object.values(site.workflows);
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <div className={classes.root}>
      <Button onClick={handleClickOpen} size="small">Create</Button>

      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>{"Create a new workflow"} </DialogTitle>
        <DialogContent>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.selectSmall}>
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
            <FormControl variant="outlined" className={classes.selectLarge}>
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
            <TextField className={classes.selectLarge} label="Localised Name" variant="outlined" defaultValue="Localised name" helperText="Name to be displayed to users" />

          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export { WorkflowComposer }