import React from 'react';
import { makeStyles, createStyles, Theme, Box, TextField, InputLabel, FormControl } from '@material-ui/core';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TableRow from '@material-ui/core/TableRow';


import { LinkItem} from './LinkItem';
import { API, Layout } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '98%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    select: {
      marginRight: theme.spacing(1),
      minWidth: '15ch',
    },
    formControl: {
      marginRight: theme.spacing(1),
      minWidth: '50ch',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
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

interface LinkComposerProps {

}


const LinkComposer: React.FC<LinkComposerProps> = ({ }) => {
  const classes = useStyles();
  const [type, setType] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };


  return (
    <div className={classes.root}>
      <Accordion square={true} >
        <AccordionSummary
          expandIcon={<AddCircleOutlineIcon className={classes.iconButton} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Add new link</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className={classes.heading}>
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={type}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={10}>Internal</MenuItem>
                <MenuItem value={20}>External</MenuItem>
              </Select>
            </FormControl >
            <FormControl variant="outlined" className={classes.select}>
              <InputLabel id="demo-simple-select-outlined-label">Locale</InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={type}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={10}>EN</MenuItem>
                <MenuItem value={20}>FI</MenuItem>
                <MenuItem value={20}>SV</MenuItem>
              </Select>
            </FormControl >

            <TextField className={classes.formControl} id="outlined-basic" label="Description" variant="outlined" />
            <TextField className={classes.formControl} id="outlined-basic" label="Value" variant="outlined" />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export { LinkComposer }