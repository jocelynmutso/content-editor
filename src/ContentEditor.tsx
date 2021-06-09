import React from 'react';
import { Layout, PathView, Editor, Explorer } from './core';

interface ContentEditorProps {

}


const ContentEditor: React.FC<ContentEditorProps> = () => {
  return (
    <Layout.Provider components={{
      top: () => (<PathView />),
      left: () => (<Explorer />),
      center: () => (<Editor />)
    }} />
  )
}

export { ContentEditor };
export type { ContentEditorProps }
