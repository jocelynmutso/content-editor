import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles, createStyles, Theme, IconButton } from '@material-ui/core';

import { API } from '../../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
     // padding: 0,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
      }
    },
    margin: {
      marginRight: theme.spacing(1)
    },
    iconButton: {
      padding: 2,
      marginLeft: theme.spacing(1),
      color: theme.palette.primary.dark,
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        "& .MuiSvgIcon-root": {
          color: theme.palette.background.paper,
        }
      }
    },
  }),
);


interface LinkEditProps {
  /*site: API.CMS.Site;
  article: API.CMS.Article;
  link: API.CMS.Link;
  */
}

const LinkEdit: React.FC<LinkEditProps> = ({  }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  

  return (
    <div className={classes.margin}>
      <IconButton className={classes.iconButton} onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
    </div>
  );
}
export { LinkEdit }
