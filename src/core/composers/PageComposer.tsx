import React from 'react';
import ReactDOM from "react-dom";
import { makeStyles, createStyles, Theme, Box, TextField } from '@material-ui/core';

import MDEditor from '@uiw/react-md-editor';

export default function App() {

}

const useStyles = () => makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      width: '95%',
      margin: theme.spacing(1),
      backgroundColor: theme.palette.background.paper
    }
  }),
)();


type PageComposerProps = {

}

const PageComposer: React.FC<PageComposerProps> = ({ }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<string | undefined>("**Hello world!!!**");
  
  return (
    <div className="container">
      <MDEditor
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export { PageComposer }