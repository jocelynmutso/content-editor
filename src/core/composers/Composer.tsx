import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core';
import { Layout, Ide } from '../deps';
import {
  PageComposer, ComposerSelect, LinkTable, LinksView, WorkflowsView,
  WorkflowsTable, ReleasesView, LocalesView, ArticlesView
} from './';

const useStyles = (props: { y: number }) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `${props.y}px`,
      paddingLeft: theme.spacing(2)
    },
    left: {
      display: 'flex',
      padding: '1vw',
      backgroundColor: theme.palette.background.paper,
      height: '100%',
    },
    right: {
      flexGrow: 1,
      padding: '1vw',
      backgroundColor: theme.palette.background.default,
    },
  }),
)();


const Composer: React.FC<{}> = () => {
  const layout = Layout.useContext();
  const site = Ide.useSite();
  const classes = useStyles(layout.session.dimensions);
  const tabs = layout.session.tabs;

  if (tabs.length === 0) {
    return null;
  }

  //composers which are not linked directly with an article
  const active = tabs[layout.session.history.open];
  if (active.id === 'releases') {
    return (<ReleasesView />);
  } else if (active.id === 'links') {
    return (<LinksView />)
  } else if (active.id === 'newItem') {
    return (<ComposerSelect />)
  } else if (active.id === 'locales') {
    return (<LocalesView />)
  } else if (active.id === 'workflows') {
    return (<WorkflowsView />)
  } else if (active.id === 'articles') {
    return (<ArticlesView />)
  }

  //article-based composers
  const article = site.articles[active.id];
  const tab: Ide.Tab = active;
  if (!tab.data || !tab.data.nav) {
    return null;
  }


  let composer: React.ReactChild;
  if (tab.data.nav.type === "ARTICLE_PAGES") {
    const locale = tab.data.nav.value as string;
    composer = (<PageComposer key={article.id + "-" + locale} article={article} locale={locale} />);
  } else if (tab.data.nav.type === "ARTICLE_LINKS") {
    composer = (<LinkTable key={article.id + "-links"} article={article} />)
  } else if (tab.data.nav.type === "ARTICLE_WORKFLOWS") {
    composer = (<WorkflowsTable key={article.id + "-workflows"} article={article} />)
  } else {
    composer = (<></>);
  }

  return (<div className={classes.root} key={article.id}>{composer}</div>)
}
export { Composer }


