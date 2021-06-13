import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';


const drawerWidth = '25vw';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: theme.palette.background.default,
    },
    drawerContainer: {
      overflow: 'auto',
    },

  }),
);

interface AppDrawerProps {
  children: React.ReactElement;
}

const AppDrawer: React.FC<AppDrawerProps> = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
       {children}
      </Drawer>
    </div>
  );
}

export { AppDrawer }

