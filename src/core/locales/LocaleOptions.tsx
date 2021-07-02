import React from 'react';
import { makeStyles, createStyles, Theme, Paper, InputLabel, TextField, IconButton } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FormControl from '@material-ui/core/FormControl';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityOnIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';

import { API } from '../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      width: '98%',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.info.light
    },
    bold: {
      fontWeight: 'bold',
    },
    accordion: {
      backgroundColor: theme.palette.info.light
    },
    table: {
      // maxWidth: 400,
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    },
    paper: {
      backgroundColor: theme.palette.info.light
    },
    input: {
      marginRight: theme.spacing(1),
      padding: 0,
      minWidth: '60ch',
      backgroundColor: theme.palette.background.paper
    },
    select: {
      marginRight: theme.spacing(1),
      padding: 0,
      minWidth: '30ch',
      backgroundColor: theme.palette.background.paper
    },
    formControl: {
      marginRight: theme.spacing(1),
      minWidth: '20ch'
    },
    heading: {
      fontWeight: 'bold',
      padding: theme.spacing(1),
      textAlign: 'center',
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




interface LocaleOptionsProps {
  site: API.CMS.Site;
}


const LocaleOptions: React.FC<LocaleOptionsProps> = ({ site }) => {
  const classes = useStyles();
  const [country, setCountry] = React.useState();
  const [locale, setLocale] = React.useState('');
  
  const locales: API.CMS.SiteLocale[] = Object.values(site.locales);

  return (
    <div>
      <Accordion square={true} className={classes.accordion} >
        <AccordionSummary
          expandIcon={<IconButton className={classes.iconButton}><AddCircleOutlineIcon /></IconButton>}
        >
          <Typography className={classes.heading}>Language Options</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormControl variant="outlined" className={classes.select}>
            <InputLabel>Locale</InputLabel>
            <Select
              value={locale}
              >
              <MenuItem value={10}>English: EN</MenuItem>
              <MenuItem value={20}>Finnish: FI</MenuItem>
              <MenuItem value={20}>Swedish: SV</MenuItem>
            </Select>
          </FormControl>
            <TextField className={classes.input} label="Optional note" variant="outlined" />
          <IconButton className={classes.iconButton}><AddIcon /></IconButton>
        </AccordionDetails>
      </Accordion>

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell className={classes.bold} align="left">Active locales</TableCell>
              <TableCell className={classes.bold} align="left">Status</TableCell>
              <TableCell className={classes.bold} align="left">Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locales.map((locale, index) => (
              <TableRow key={index}>
                <TableCell className={classes.tableCell} align="left">{locale.value}</TableCell>
                <TableCell>{locale.enabled ? 
                  <IconButton className={classes.iconButton}> <VisibilityOnIcon /></IconButton> 
                  : <IconButton className={classes.iconButton}><VisibilityOffIcon /></IconButton>}
                </TableCell>
                <TableCell>{locale.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>

  );
}

export { LocaleOptions }