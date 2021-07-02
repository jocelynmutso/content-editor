import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import NewReleasesIcon from '@material-ui/icons/NewReleases';
import LinkIcon from '@material-ui/icons/Link';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import SettingsIcon from '@material-ui/icons/Settings';
import { Explorer } from '../explorer';

import { Layout, API } from '../deps';



const toolbar = (actions: Layout.Session.Actions, site: API.CMS.Site, releases: API.CMS.Releases): Layout.Session.ToolbarItem[] => {
  return [

    {
      id: 'toolbar.createNew',
      icon: <PlaylistAddIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'article', label: "New Article" });
        }
      }
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
          actions.handleTabAdd({ id: 'releases', label: "Releases" });
        }
      }
    },

    {
      id: 'toolbar.delete',
      icon: <DeleteIcon />,
      type: { getView: () => (<Explorer site={site} />) }
    },
    
    {
      id: 'toolbar.options',
      icon: <SettingsIcon />,
      type: {
        onClick: () => {
          actions.handleTabAdd({ id: 'options', label: "Options" });
        }
      }
    },

  ];
}

export { toolbar };