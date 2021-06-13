import React from 'react';

import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { Explorer } from '../';

import { Layout } from '../deps';
import { API } from '../';

const toolbar = (): Layout.Session.ToolbarItem[] => {
  return [
    { id: 'toolbar.explorer',
      icon: <LibraryBooksIcon />,     
      type: { getView: () => (<Explorer site={API.create()}/>) } },
  ];
}

export {toolbar};