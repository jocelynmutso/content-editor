import React from 'react';
import { makeStyles, createStyles, Theme, Box, TextField } from '@material-ui/core';

import MDEditor from '@uiw/react-md-editor';

export default function App() {

}

const useStyles = () => makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '98%',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
 
    }
  }),
)();


type PageComposerProps = {

}

const PageComposer: React.FC<PageComposerProps> = ({ }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string | undefined>("**Hello world!!!**");
  
  return (
    <div className={classes.container}>
      <MDEditor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export { PageComposer }