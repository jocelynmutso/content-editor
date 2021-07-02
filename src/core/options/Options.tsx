import React from 'react';
import { makeStyles, createStyles, Theme, Box, TextField, InputLabel, FormControl, IconButton, Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { API } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '98%',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.secondary.dark
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
      backgroundColor: theme.palette.background.paper,
      minWidth: '60ch'
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

interface OptionsProps {
}


const Options: React.FC<OptionsProps> = ({ }) => {
  const classes = useStyles();
  const [type, setType] = React.useState('');
  const [locale, setLocale] = React.useState('');

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  const handleLocaleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLocale(event.target.value as string);
  };

  return (
    <Paper className={classes.root}>
      <Typography className={classes.heading}>Edit application options</Typography>

      <Typography className={classes.heading}>
        <FormControl variant="outlined" className={classes.select}>
          <InputLabel id="demo-simple-select-outlined-label">Parent</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={locale}
            onChange={handleLocaleChange}
            label="Age"
          >
            <MenuItem value={10}>none</MenuItem>
            <MenuItem value={20}>300_residence</MenuItem>
            <MenuItem value={30}>350_construction</MenuItem>
            <MenuItem value={40}>450_education</MenuItem>
          </Select>
        </FormControl >
        <TextField className={classes.select} id="outlined-basic" label="Order" variant="outlined" />
        <TextField className={classes.formControl} id="outlined-basic" label="Name" variant="outlined" />
      </Typography>

    </Paper>
  );
}

export { Options }