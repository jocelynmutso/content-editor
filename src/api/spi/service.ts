import API from '../';

const createService = (init: {store?: API.CMS.Store, url?: string}): API.CMS.Service => {
  const backend: API.CMS.Store = init.url ? store(init.url): init.store as any;
  
  const getSite = async () => {
    
  }
  const getReleases = async () => {
    
  }
  return {
    getSite, getReleases,
    create: () => new CreateBuilderImpl(backend),
    update: () => new UpdateBuilderImpl(backend),
    delete: () => new DeleteBuilderImpl(backend)
  } as any;
}

class CreateBuilderImpl implements API.CMS.CreateBuilder {
  private _backend: API.CMS.Store;
  constructor(backend: API.CMS.Store) {
    this._backend = backend;
  }
  async release(init: API.CMS.CreateRelease): Promise<API.CMS.Release> {
    return init as any;
  }
  async locale(init: API.CMS.CreateLocale): Promise<API.CMS.SiteLocale> {
    return init as any;
  }
  async article(init: API.CMS.CreateArticle): Promise<API.CMS.Article> {
    return init as any;
  }
  async page(init: API.CMS.CreatePage): Promise<API.CMS.Page> {
    return init as any;
  }
  async link(init: API.CMS.CreateLink): Promise<API.CMS.Link> {
    return init as any;
  }
  async workflow(init: API.CMS.CreateWorkflow): Promise<API.CMS.Workflow> {
    return init as any;
  }
}

class UpdateBuilderImpl implements API.CMS.UpdateBuilder {
  private _backend: API.CMS.Store;
  constructor(backend: API.CMS.Store) {
    this._backend = backend;
  }
  async locale(init: API.CMS.LocaleMutator): Promise<API.CMS.SiteLocale> {
    return init as any;
  }
  async article(init: API.CMS.ArticleMutator): Promise<API.CMS.Article> {
    return init as any;
  }
  async pages(init: API.CMS.PageMutator[]): Promise<API.CMS.Page[]> {
    console.log("saving pages", init);
    return init as any;
  }
  async link(init: API.CMS.LinkMutator): Promise<API.CMS.Link> {
    return init as any;
  }
  async workflow(init: API.CMS.WorkflowMutator): Promise<API.CMS.Workflow> {
    return init as any;
  }
}

class DeleteBuilderImpl implements API.CMS.DeleteBuilder {
  private _backend: API.CMS.Store;
  constructor(backend: API.CMS.Store) {
    this._backend = backend;
  }
  async locale(init: API.CMS.LocaleId): Promise<void> {
    return init as any;
  }
  async article(init: API.CMS.ArticleId): Promise<void> {
    return init as any;
  }
  async page(init: API.CMS.PageId): Promise<void> {
    return init as any;
  }
  async link(init: API.CMS.LinkId): Promise<void> {
    return init as any;
  }
  async workflow(init: API.CMS.WorkflowId): Promise<void> {
    return init as any;
  }
  async workflowArticlePage(workflow: API.CMS.WorkflowId, article: API.CMS.ArticleId, locale: API.CMS.Locale): Promise<void> {
    const body = {workflow, article, locale};
    console.log("delete workflow article", body);
  }
  async linkArticlePage(link: API.CMS.LinkId, article: API.CMS.ArticleId, locale: API.CMS.Locale): Promise<void> {
    const body = {link, article, locale};
    console.log("delete link article", body);
  }
}

const store: (initUrl: string) => API.CMS.Store = (initUrl: string) => ({
  fetch<T>(path: string, req?: RequestInit): Promise<T> {
    if (!path) {
      throw new Error("can't fetch with undefined url")
    }

    const defRef: RequestInit = {
      method: "GET",
      credentials: 'same-origin',
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
  
    const url = initUrl;
    const finalInit: RequestInit = Object.assign(defRef, req ? req : {});

    return fetch(url + path, finalInit)
      .then(response => {
        if (response.status === 302) {
          return null;
        }
        if (!response.ok) {
          return response.json().then(data => {
            console.error(data);
            throw new API.CMS.StoreError({
              text: response.statusText,
              status: response.status,
              errors: data
            });
          });
        }
        return response.json();
      })
  }
});


export default createService;

