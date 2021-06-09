import React from 'react';
import { Layout, PathView, Editor } from './core';

interface ContentEditorProps {

}


const ContentEditor: React.FC<ContentEditorProps> = () => {
  return (
    <Layout.Provider components={{
      top: () => (<PathView />),
      left: () => (<></>),
      center: () => (<Editor />)
    }}/>
  )
}

export {ContentEditor};
export type { ContentEditorProps }
