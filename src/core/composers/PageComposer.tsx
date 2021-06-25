import React from 'react';
import { makeStyles, createStyles, Theme, Box } from '@material-ui/core';
import { EditorToolbar } from '../editor';
import { API, Layout } from '../deps';


interface PageComposerProps {

}


const PageComposer: React.FC<PageComposerProps> = ({ }) => {
  return (
    <div>
      <EditorToolbar />
      Page Composer
    </div>
  )
}

export { PageComposer }