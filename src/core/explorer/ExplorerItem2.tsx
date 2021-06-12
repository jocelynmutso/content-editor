import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Divider, Typography, Box } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    inline: {
      display: 'inline',
    },


    container: {
      display: 'flex',
    },
    spacer: {
      flexGrow: 1
    }
  }),
);

interface ExplorerItemProps {

}

const ExplorerItem: React.FC<ExplorerItemProps> = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Position: 000
          </ListSubheader>
        }
        className={classes.root}
      >


        <ListItem button onClick={handleClick}>
          <ListItemText
            primary={
              <div>
                <Typography variant="body1" className={classes.inline}>
                  {"Education"}
                </Typography>
                <Typography variant="caption">
                  {"Last Modified: 10 days ago"}
                </Typography>
              </div>
            }
            secondary={
              <div>
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.inline}
                  color="textPrimary"
                >
                  EN FI SV
              </Typography>
              </div>
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="body2" className={classes.inline}>
                    {"EN"}
                    {": "}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" >
                    {"Created: 04 Nov., 2020"}
                    {" | "}
                    {"Modified: 22 Nov., 2021"}
                  </Typography>
                }
              />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="body2" className={classes.inline}>
                    {"FI"}
                    {": "}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" >
                    {"Created: 12 Dec., 2020"}
                    {" | "}
                    {"Modified: 03 Jan., 2021"}
                  </Typography>
                }
              />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="body2" className={classes.inline}>
                    {"SV"}
                    {": "}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" >
                    {"Created: 09 Dec., 2020"}
                    {" | "}
                    {"Modified: 22 Dec., 2021"}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
      <Divider />

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Position: 100
        </ListSubheader>
        }
        className={classes.root}
      >
        <Box>
          <ListItem button onClick={handleClick}>
            <ListItemText
              primary={
                <div>
                  <Typography variant="body1" className={classes.inline}>
                    {"Health care"}
                    {" | "}
                  </Typography>
                  <Typography variant="caption">
                    {"Last Modified: 2 days ago"}
                  </Typography>
                </div>
              }
              secondary={
                <div>
                  <Typography
                    component="span"
                    variant="caption"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    EN FI SV
              </Typography>
                </div>
              }
            />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
        </Box>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>

            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="body2" className={classes.inline}>
                    {"EN"}
                    {": "}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" >
                    {"Created: 04 Nov., 2020"}
                    {" | "}
                    {"Modified: 22 Nov., 2021"}
                  </Typography>
                }
              />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="body2" className={classes.inline}>
                    {"FI"}
                    {": "}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" >
                    {"Created: 12 Dec., 2020"}
                    {" | "}
                    {"Modified: 03 Jan., 2021"}
                  </Typography>
                }
              />
            </ListItem>

            <ListItem button className={classes.nested}>
              <ListItemText
                primary={
                  <Typography variant="body2" className={classes.inline}>
                    {"SV"}
                    {": "}
                  </Typography>
                }
                secondary={
                  <Typography variant="caption" >
                    {"Created: 09 Dec., 2020"}
                    {" | "}
                    {"Modified: 22 Dec., 2021"}
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Collapse>
      </List>

    </div>

  );
}

export { ExplorerItem }





