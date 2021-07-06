import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { DeleteAlert, RenameAlert } from '../alerts';
import { API } from '../deps';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button1: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
      }
    },
    button2: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.background.paper,
      fontWeight: 'bold',
      "&:hover, &.Mui-focusVisible": {
        backgroundColor: theme.palette.error.dark,
        color: theme.palette.background.paper,
        fontWeight: 'bold'
      }
    },
  }),
);
interface DeleteRenameProps {
  site: API.CMS.Site;
  article: API.CMS.Article;
  onClick: (event: React.MouseEvent) => void;
}

const DeleteRename: React.FC<DeleteRenameProps> = ({ onClick, site, article }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup size="small">
        <DeleteAlert onClick={onClick} />
        <RenameAlert onClick={onClick} site={site} article={article} />
      </ButtonGroup>
    </div>
  );
}

export { DeleteRename }
