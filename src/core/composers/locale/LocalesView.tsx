import React from 'react';
import { makeStyles, Theme, createStyles, IconButton, Typography, Card } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityOnIcon from '@material-ui/icons/Visibility';
import { FormattedMessage } from 'react-intl';

import { LocalesOverview } from './LocalesOverview';
import { LocaleDisable } from './LocaleDisable';
import { API, Ide } from '../../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex'
    },
    cardContent: {
      flexGrow: 1,
    },
    root: {
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    card: {
      margin: theme.spacing(1),
      width: '40vw',
      flexDirection: 'column',
      "&:hover, &.Mui-focusVisible": {
        color: theme.palette.secondary.dark,
        fontWeight: 'bold',
      }
    },

    bold: {
      fontWeight: 'bold'
    },
    title: {
      margin: theme.spacing(1),
      color: theme.palette.primary.main
    },
  }));

const useRowStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      '& > *': {
        paddingLeft: 15
      },
    },

    table: {
      margin: theme.spacing(2)
    },
    bold: {
      fontWeight: 'bold',
      borderBottom: 'unset'
    },
    column: {
      fontWeight: 'bold',
      borderBottom: 'unset',
      padding: 0
    },
    tableCell: {
      paddingTop: 0,
      paddingBottom: 0
    },
    iconButton: {
      padding: 2,
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }));


const LocalesView: React.FC<{}> = () => {
  const classes = useStyles();
  const site = Ide.useSite();
  const locales = Object.values(site.locales);

  return (

    <div className={classes.container} >
      <Card className={classes.card}>
        <Typography variant="h3" className={classes.title}><FormattedMessage id="locales" /> </Typography>
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell className={classes.bold} align="left"><FormattedMessage id="locale" /></TableCell>
                <TableCell className={classes.bold} align="left"><FormattedMessage id="status" /></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locales.map((locale, index) => (<Row key={index} site={site} locale={locale} />))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <LocalesOverview site={site} />
    </div>

  );
}

interface RowProps {
  site: API.CMS.Site,
  locale: API.CMS.SiteLocale,
}

const Row: React.FC<RowProps> = ({ site, locale }) => {
  const classes = useRowStyles();

  return (
    <div >
      <TableRow key={locale.id} hover className={classes.row}>
        <TableCell className={classes.tableCell} align="left">{locale.body.value}</TableCell>
        <TableCell className={classes.tableCell} align="left">
          {locale.body.enabled ?
            <IconButton className={classes.iconButton}> <VisibilityOnIcon /></IconButton>
            : <IconButton className={classes.iconButton}><VisibilityOffIcon /></IconButton>}
        </TableCell>
      </TableRow>
    </div>
  )
}

export { LocalesView }




