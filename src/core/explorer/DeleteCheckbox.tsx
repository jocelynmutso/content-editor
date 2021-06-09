import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    checkbox: {
      color: theme.palette.error.dark,
    },
  }),
);



interface DeleteCheckboxProps {

}


const DeleteCheckbox: React.FC<DeleteCheckboxProps> = () => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  };

  return (
    <div>
      <Checkbox
        className={classes.checkbox}
        size="small"
        inputProps={{ 'aria-label': 'checkbox with small size' }}
      />
    </div>
  );
}

export { DeleteCheckbox }
