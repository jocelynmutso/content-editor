import React from 'react';
import { makeStyles, createStyles, Theme, Typography, Box, Divider } from '@material-ui/core';
import { Layout } from '../deps';
import { API } from '../';

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


interface ReleasesProps {
  releases: API.Releases
}

const Releases: React.FC<ReleasesProps> = ({ releases }) => {
  const layout = Layout.useContext();
  const classes = useStyles(layout.session.dimensions);

  return (<>
    <Box display='flex' className={classes.root}>
      <Box flexGrow="0" className={classes.left}>
        <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
            facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
            gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
            donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
            Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
            imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
            arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
            donec massa sapien faucibus et molestie ac.
        </Typography>

      </Box>
    </Box>
  </>
  )
}

export type { ReleasesProps }
export { Releases }


