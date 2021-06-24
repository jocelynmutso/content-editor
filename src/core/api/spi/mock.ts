import API from '../';


const pages: Record<API.CMS.PageId, API.CMS.Page> = {
  
};

const links: Record<API.CMS.LinkId, API.CMS.Link> = {
  
};
const articles: Record<API.CMS.ArticleId, API.CMS.Article> = {
  
};
const workflows: Record<API.CMS.WorkflowId, API.CMS.Workflow> = {
  
};


const createMock = (): API.CMS.Service => {
  const releases: API.CMS.Releases = [

  ];
  const getSite = async () => {
    return { pages, links, articles, workflows };
  }
  const getReleases = async () => {
    return releases;
  }
  return { getSite, getReleases } as any;
}

export default createMock;