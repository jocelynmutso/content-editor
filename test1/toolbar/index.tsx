import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import LinkIcon from '@material-ui/icons/Link';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { Explorer } from '../';

import { Layout } from '../deps';
import { API } from '../';


const toolbar = (actions: Layout.Session.Actions, site: API.Site): Layout.Session.ToolbarItem[] => {
  return [
    
    {
      id: 'toolbar.createNew',
      icon: <PlaylistAddIcon />,
      type: { getView: () => (<Explorer site={site} />) }
    },

    {
      id: 'toolbar.explorer',
      icon: <LibraryBooksIcon />,
      type: { getView: () => (<Explorer site={site} />) }
    },

    {
      id: 'toolbar.links',
      icon: <LinkIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'links', label: "Links" });
        }
      }
    },

    {
      id: 'toolbar.releases',
      icon: <NewReleasesIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'releases', label: 'Releases' });
        }
      }
    },

    {
      id: 'toolbar.delete',
      icon: <DeleteIcon />,
      type: { getView: () => (<Explorer site={API.createSite()} />) }
    },

  ];
}

export { toolbar };