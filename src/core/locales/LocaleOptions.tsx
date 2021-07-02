import React from 'react';
import { makeStyles, createStyles, Theme, Paper, InputLabel } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { API } from '../deps';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '98%',
      margin: theme.spacing(1),
      padding: theme.spacing(1),
      backgroundColor: theme.palette.info.light
    },
    bold: {
      fontWeight: 'bold',
    },
    table: {
      minWidth: 650,
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
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

  const locales: API.CMS.Locale[] = site.locales;

  return (
    <Paper className={classes.root}>
      <Typography className={classes.heading}> Language Options </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel>Language</InputLabel>
        <Select
          className={classes.select}
          value={country}
        >
          <MenuItem value={20}>English: EN</MenuItem>
          <MenuItem value={30}>Finnish: FI</MenuItem>
          <MenuItem value={40}>Swedish: SV</MenuItem>
        </Select>
      </FormControl >

      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            locales
          </TableHead>
          <TableBody>
            {locales.map((locale, index) => (
              <TableRow key={index}>
                <TableCell className={classes.tableCell} align="left">{locale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export { LocaleOptions }