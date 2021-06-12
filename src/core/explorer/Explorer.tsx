import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import API from '../api';
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
  site: API.Site;
}


const Explorer: React.FC<ExplorerProps> = ({ site }) => {
  const classes = useStyles();

  const paths = Object.values(site.paths);
  return (
    <div className={classes.drawerContainer}>
      {paths.map((path, index) => (<ExplorerItem key={index} path={path} site={site}/>) )}
    </div>
  );
}

export { Explorer }

