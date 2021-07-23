import Ide from './ide';
import { API } from '../deps';


enum ActionType {
  setSite = "setSite",
  setReleases = "setReleases",
  setPageUpdate = "setPageUpdate"
}

interface Action {
  type: ActionType;

  setPageUpdate?: { page: API.CMS.PageId, value: API.CMS.LocalisedContent };
  setSite?: { site: API.CMS.Site };
  setReleases?: { releases: API.CMS.Releases };
}

const ActionBuilder = {
  setPageUpdate: (setPageUpdate: { page: API.CMS.PageId, value: API.CMS.LocalisedContent }) => ({ type: ActionType.setPageUpdate, setPageUpdate }),
  setSite: (setSite: { site: API.CMS.Site }) => ({ type: ActionType.setSite, setSite }),
  setReleases: (setReleases: { releases: API.CMS.Releases }) => ({ type: ActionType.setReleases, setReleases }),
}

class ReducerDispatch implements Ide.Actions {

  private _sessionDispatch: React.Dispatch<Action>;
  private _service: API.CMS.Service;
  
  constructor(session: React.Dispatch<Action>, service: API.CMS.Service) {
    this._sessionDispatch = session;
    this._service = service;
  }
  async handleLoad(): Promise<void> {
    this._service.getSite().then(site => this._sessionDispatch(ActionBuilder.setSite({site})));
    this._service.getReleases().then(releases => this._sessionDispatch(ActionBuilder.setReleases({releases})));
  }
  async handleLoadReleases(): Promise<void> {
    this._service.getReleases().then(releases => this._sessionDispatch(ActionBuilder.setReleases({releases})));
  }
  async handleLoadSite(): Promise<void> {
    this._service.getSite().then(site => this._sessionDispatch(ActionBuilder.setSite({site})));
  }
  
  handlePageUpdate(page: API.CMS.PageId, value: API.CMS.LocalisedContent): void {
    this._sessionDispatch(ActionBuilder.setPageUpdate({page, value}));
  }
}

const Reducer = (state: Ide.Session, action: Action): Ide.Session => {
  switch (action.type) {
    case ActionType.setSite: {
      if (action.setSite) {
        return state.withSite(action.setSite.site);
      }
      console.error("Action data error", action);
      return state;
    }
    case ActionType.setReleases: {
      if (action.setReleases) {
        return state.withReleases(action.setReleases.releases);
      }
      console.error("Action data error", action);
      return state;
    }
    case ActionType.setPageUpdate: {
      if (action.setPageUpdate) {
        return state.withPageValue(action.setPageUpdate.page, action.setPageUpdate.value);
      }
      console.error("Action data error", action);
      return state;
    }
  }
}

export type { Action }
export { Reducer, ReducerDispatch, ActionType };
