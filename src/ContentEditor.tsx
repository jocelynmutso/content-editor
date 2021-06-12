import React from 'react';
import { Layout, PathView, Editor, Explorer, API } from './core';

interface ContentEditorProps {

}


const ContentEditor: React.FC<ContentEditorProps> = () => {
  
  const site = API.create();
  
  return (
    <Layout.Provider components={{
      top: () => (<PathView />),
      left: () => (<Explorer site={site} />),
      center: () => (<Editor />)
    }} />
  )
}

export { ContentEditor };
export type { ContentEditorProps }
