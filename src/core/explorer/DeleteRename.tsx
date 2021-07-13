import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { DeleteArticle } from './DeleteArticle';
import { RenameArticle} from './RenameArticle';
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
    }
  }),
);
interface DeleteRenameProps {
  site: API.CMS.Site;
  article: API.CMS.Article;
}

const DeleteRename: React.FC<DeleteRenameProps> = ({ site, article }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup size="small">
        <DeleteArticle site={site} article={article}  />
        <RenameArticle site={site} article={article} />
      </ButtonGroup>
    </div>
  );
}

export { DeleteRename }
