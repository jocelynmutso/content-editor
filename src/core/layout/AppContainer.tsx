import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core';


import { AppHeader } from './AppHeader';
import { AppDrawer } from './AppDrawer';
import { AppEditor } from './AppEditor';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.paper,
      height: '100vh',
      maxWidth: "100vw",
      padding: 0,
    },
  }),
);


interface AppContainerProps {
  components: {
    top: () => React.ReactElement;
    left: () => React.ReactElement;
    center: () => React.ReactElement;
  }
}

const AppContainer: React.FC<AppContainerProps> = ({components}) => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <AppHeader children={components.top()} />
        <AppDrawer />
        <AppEditor children={components.center()} />
      </Container>
    </div>
  )
}

export type {AppContainerProps};
export { AppContainer }