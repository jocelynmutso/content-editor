import React from 'react';
import { makeStyles, Theme, createStyles, Divider, Typography, Box, Button } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import API from '../api';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    nested: {
      paddingLeft: theme.spacing(2),
      lineHeight: '.5',
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
    button: {
      padding: 3,
      marginBottom: 3,
      fontWeight: 'bold',
      "&:hover": {
        backgroundColor: theme.palette.info.main,
        color: 'white',
        fontWeight: 'bold'
      }
    }
  }),
);

interface ExplorerItemProps {
  path: API.Path,
  site: API.Site
}

const ExplorerItem: React.FC<ExplorerItemProps> = ({ path, site }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText
          primary={<Typography variant="body1" className={classes.nameStyle}>{path.name}</Typography>}
          secondary={<>
            <Typography component="span" variant="caption" className={classes.localeSummary}>
              {path.markdowns.map((id, index) => (<span className={classes.button} key={index}>{site.markdowns[id].locale}&nbsp;</span>))}
            </Typography>
            <br />
            <Typography variant="caption">{"Last Modified: 10 days ago"}</Typography></>
          }
        />
        {open ? <ExpandLess className={classes.iconColor} /> : <ExpandMore className={classes.iconColor} />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {path.markdowns.map(id => site.markdowns[id]).map((md, index) => (
            <ListItem className={classes.nested} key={index}>
              <ListItemText
                primary={
                  <Box display='flex'>
                    <Typography component="span" variant="body2" className={classes.nameStyle}>
                      <Button variant="text" className={classes.button}>{md.locale}</Button>
                    </Typography>
                    <Box flexGrow={1} />
                    <Box display="flex" alignItems="center">
                    <Typography component="span" variant="caption" className={classes.nameStyle}>
                      {"22 Nov., 2021"}
                    </Typography>
                    </Box>
                  </Box>
                }
              />
            </ListItem>

          ))}

        </List>
        <Divider />
      </Collapse>

    </>
  );
}

export { ExplorerItem }





