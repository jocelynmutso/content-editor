import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { AppHeader, AppDrawer, AppEditor } from '../';


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

}

const AppContainer: React.FC<AppContainerProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.container}>
        <AppHeader />
        <AppDrawer />
        <AppEditor />
      </Container>
    </div>
  )
}

export { AppContainer }