import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addButton: {
      color: theme.palette.info.main,
    },
  }),
);



interface AddButtonProps {

}


const AddButton: React.FC<AddButtonProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <IconButton>
        <AddCircleIcon className={classes.addButton} />
      </IconButton>
    </div>
  );
}

export { AddButton }