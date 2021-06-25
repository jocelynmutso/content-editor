import React from 'react';
import { List, ListItem, makeStyles, createStyles, Theme, IconButton } from '@material-ui/core';
import Popper, { PopperPlacementType } from '@material-ui/core/Popper';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import WorkIcon from '@material-ui/icons/Work';

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
    button: {
      border: 0
    }
  }),
);

interface WorkflowModeProps {

}

const WorkflowMode: React.FC<WorkflowModeProps> = ({ }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();
  const classes = useStyles();

  const handleClick = (newPlacement: PopperPlacementType) => (
    event: React.MouseEvent<HTMLElement>,
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  }


  return (
    <div className={classes.root}>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.paper}>
              <List>
                <ListItem>Open Flow editor</ListItem>
              </List>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Grid container justify="flex-end">
        <Grid item xs={4}>
          <IconButton onClick={handleClick('bottom')}>
            <WorkIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export { WorkflowMode }
