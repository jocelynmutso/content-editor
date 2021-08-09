import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { makeStyles, createStyles, Theme, IconButton } from '@material-ui/core';
import { FormattedMessage } from 'react-intl';

import { API, Ide } from '../../deps';

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


interface LocaleDisableProps {
  site: API.CMS.Site;
  locale: API.CMS.SiteLocale;
}

const LocaleDisable: React.FC<LocaleDisableProps> = ({ site, locale }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const ide = Ide.useIde();


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleEnable = (enabled: boolean) => {
    const entity: API.CMS.LocaleMutator = { localeId: locale.id, value: locale.body.value, enabled: enabled };
    console.log("entity", entity)
    ide.service.update().locale(entity).then(success => {
      console.log(success)
      handleClose();
      ide.actions.handleLoadSite();
    });
  }

  const articles = Object.values(site.articles);

  return (
    <div className={classes.margin}>
      <IconButton className={classes.iconButton} onClick={handleClickOpen}>

        {locale.body.enabled === true ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle><FormattedMessage id="locale.disable.title" /> </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {locale.body.enabled ? <FormattedMessage id="locale.disable" /> : <FormattedMessage id="locale.enable" />}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={handleClose} color="primary">
            <FormattedMessage id="button.cancel" />
          </Button>
          {locale.body.enabled ?
            (<Button variant="contained" onClick={() => handleEnable(false)} color="primary" autoFocus><FormattedMessage id="button.disable" /></Button>) :
            (<Button variant="contained" onClick={() => handleEnable(true)} color="primary" autoFocus><FormattedMessage id="button.enable" /></Button>)

          }

        </DialogActions>
      </Dialog>
    </div>
  );
}
export { LocaleDisable }
