import React from 'react';
import { makeStyles, createStyles, Theme, IconButton } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
    },
    typography: {
      padding: theme.spacing(2),
    },
    paper: {
      width: 'auto',
    },
    icon: {
      transform: "rotate(145deg)"
    }
  }),
);

interface LinkModeProps {

}

const LinkMode: React.FC<LinkModeProps> = ({ }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  return (
    <div className={classes.root}>
      <IconButton>
        <LinkIcon />
      </IconButton>
    </div>
  );
}

export { LinkMode }
