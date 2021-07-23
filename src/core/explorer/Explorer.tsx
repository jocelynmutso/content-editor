import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Ide } from '../deps';
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

const Explorer: React.FC<{}> = () => {
  const classes = useStyles();
  const site = Ide.useSite();
  const paths = Object.values(site.articles);

  return (
    <div className={classes.drawerContainer}>
      {paths.map((path, index) => (<ExplorerItem key={index} article={path} />))}
    </div>
  );
}

export { Explorer }

