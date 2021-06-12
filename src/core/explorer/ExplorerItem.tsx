import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';

import {LocaleDisplay} from './LocaleDisplay'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      //backgroundColor: theme.palette.background.paper,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    inline: {
      display: 'inline',
    },
  }),
);

interface ExplorerItemProps {

}

const ExplorerItem: React.FC<ExplorerItemProps> = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Paths Explorer
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={
            <React.Fragment>
            <Typography variant="body1">
              {"Education"}
              </Typography>
              <Typography variant="caption">
              {"Last Modified"}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="caption"
                className={classes.inline}
                color="textPrimary"
              >
                EN FI SV
              </Typography>
             </React.Fragment>
          }
        />
 
      </ListItem>
      <ListItem button>
        <ListItemText primary="Education / After-school services" />

      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Inbox" />

        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );

}

export { ExplorerItem }





