import React from 'react';
import {
  makeStyles, Theme, createStyles, Divider, Typography, Box, Button,
  TableContainer, Table, TableRow, TableCell, TableBody, Paper
} from '@material-ui/core';
import clsx from 'clsx';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { Layout } from '../deps';
import API from '../api';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    nameStyle: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
    },
    localeSummary: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
    },
    localeStyle: {
      color: theme.palette.primary.dark
    },
    iconColor: {
      color: theme.palette.info.main,
    },
    dividerColor: {
      background: theme.palette.primary.light,
    },
    hoverRow: {
      padding: 3,
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold'
      }
    },
    table: {
      borderBottom: 'none',
      paddingLeft: theme.spacing(2),
      paddingTop: 0,
      paddingBottom: 0,
      fontVariant: 'all-small-caps',
      fontWeight: 'bold',
        "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer'
      }
    }
  }),
);

interface ExplorerItemProps {
  path: API.Path,
  site: API.Site
}

const ExplorerItem: React.FC<ExplorerItemProps> = ({ path, site }) => {

  const layout = Layout.useContext();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
    layout.actions.handleTabAdd({ id: path.id, label: path.name });
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={<Typography variant="body1" className={classes.nameStyle}>{path.name}</Typography>}
          secondary={<>
            <Typography component="span" variant="caption" className={classes.localeSummary}>
              {path.markdowns.map((id, index) => (<span className={classes.hoverRow} key={index}>{site.markdowns[id].locale}&nbsp;</span>))}
            </Typography>
            <br />
            <Typography variant="caption">{"Last Modified: 10 days ago"}</Typography></>
          }
        />
        {open ? <ExpandLess className={classes.iconColor} /> : <ExpandMore className={classes.iconColor} />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <TableContainer>
          <Table size="small">
            <TableBody>
              {path.markdowns.map(id => site.markdowns[id]).map((md, index) => (
                <TableRow key={index} className={clsx(classes.hoverRow)} >
                  <TableCell className={classes.table}>
                    {md.locale}
                  </TableCell>
                  <TableCell className={classes.table} align="right">{"22 Nov., 2021"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

       <Divider className={classes.dividerColor}/>
      </Collapse>
    </>
  );
}

export { ExplorerItem }





