import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';
import { API, Layout } from '../deps';
import { PageComposer, LinkComposer, WorkflowComposer, ArticleComposer } from '../composers';
import { ReleaseComposer } from '../releases';
import { LocaleOptions } from '../locales';
import { LinksView } from '../links';

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


interface EditorProps {
  site: API.CMS.Site;
  releases: API.CMS.Releases;
}

const Editor: React.FC<EditorProps> = ({ site, releases }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);
  const [locale, setLocale] = React.useState("en");
  const tabs = layout.session.tabs;
  

  
  if (tabs.length === 0) {
    return null;
  }
  
  const active = tabs[layout.session.history.open];
  if (active.id === 'releases') {
    return (<ReleaseComposer releases={releases} site={site}/>);  
  } else if (active.id === 'links') {
    return (<LinksView site={site}/>)
  } else if (active.id === 'article') {
    return (<ArticleComposer />)
  } else if (active.id === 'options') {
    return (<LocaleOptions site={site} />)
  }

  const article = site.articles[active.id];

  const onClose = () => {
    layout.actions.handleTabClose(active)
  }
  return (
    <div className={classes.root} key={article.id} >
      <PageComposer key={article.id} site={site} article={article} locale={locale} />
      <LinkComposer key={article.id} site={site} article={article} />
      <br />
      <WorkflowComposer key={article.id} site={site} article={article} />
      <br />
      <ArticleComposer key={article.id} />
    </div>
  )
}

export type { EditorProps }
export { Editor }


