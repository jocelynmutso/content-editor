import React from 'react';
import { makeStyles, createStyles, Theme, Typography, Box, Divider } from '@material-ui/core';
import { Layout } from '../deps';
import { Header } from './Header';
import { Releases } from '../releases';
import API from '../api';

const useStyles = (props: { y: number }) => makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: `${props.y}px`
    },
    left: {
      display: 'flex',
      padding: '1vw',
      backgroundColor: theme.palette.background.paper,
      height: '100%',
    },
    right: {
      flexGrow: 1,
      padding: '1vw'
    },
  }),
)();


interface EditorProps {
  site: API.Site;
}

const Editor: React.FC<EditorProps> = ({site}) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);
  
  const tabs = layout.session.tabs;
  if(tabs.length === 0) {
    return null;
  }
  const active = tabs[layout.session.history.open];  
  if(active.id === 'releases') {
    return (<Releases releases={API.createReleases()} site={site}/>);  
  }
  
  const markdowns = site.paths[active.id].markdowns;
  const md1 = site.markdowns[markdowns[0]];
  const md2 = site.markdowns[markdowns[1]];

  return (<>
    <Box display='flex' className={classes.root}>
      <Box flexGrow="0" className={classes.left}>
        <Typography paragraph>
          <Header />
          {md1.content}
        </Typography>

      </Box>
      <Box flexGrow="1" className={classes.right}>
        <Typography paragraph>
         <Header />
          {md2.content}
        </Typography>
      </Box>
    </Box>
  </>
  )
}

export type { EditorProps }
export { Editor }


