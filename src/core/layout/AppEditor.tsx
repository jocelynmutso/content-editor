import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, createStyles, Theme, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.palette.background.paper,
      height: '95vh',
      maxWidth: "95vw",
      paddingTop: theme.spacing(15),
    },
    content: {
      flexGrow: 1,
      paddingLeft: '25vw',
    }
  }),
);


interface AppEditorProps {
  children: React.ReactElement
}

const AppEditor: React.FC<AppEditorProps> = ({children}) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.content}>
        {children}
      </div>
    </Container>
  )
}

export { AppEditor }