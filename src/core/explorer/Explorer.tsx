import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


import { NewPathButton } from '../';
import { DeleteCheckbox } from './DeleteCheckbox';
import { DeletePathButton } from './DeletePathButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    root: {
      display: 'flex',
    },
    drawerContainer: {
      overflow: 'auto',
    }

  }),
);

interface ExplorerProps {

}

const Explorer: React.FC<ExplorerProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.drawerContainer}>
      <NewPathButton />
      <DeletePathButton />

      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <DeleteCheckbox />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <DeleteCheckbox />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export { Explorer }

