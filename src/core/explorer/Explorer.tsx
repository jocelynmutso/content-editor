import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { LocaleDisplay } from './LocaleDisplay';
import { ExplorerItem } from './ExplorerItem'


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
      <ExplorerItem />
    </div>
  );
}

export { Explorer }

