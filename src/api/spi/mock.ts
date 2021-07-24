import API from '../';

const articles: API.CMS.Article[] = [
  { id: "a1", order: 100, name: "residence", },
  { id: "a1.1", order: 100, parentId: "a1", name: "utilities" },
  { id: "a1.2", order: 200, parentId: "a1", name: "new_address" },
  { id: "a1.3", order: 300, parentId: "a1", name: "renovation" },
  { id: "a1.4", order: 400, parentId: "a1", name: "new_home_construction" },
  { id: "a1.5", order: 500, parentId: "a1", name: "social_housing" },


  { id: "a2", order: 200, name: "health_services", },
  { id: "a2.1", order: 100, parentId: "a2", name: "hospitals" },
  { id: "a2.2", order: 200, parentId: "a2", name: "emergency_care" },
  { id: "a2.3", order: 300, parentId: "a2", name: "specialist_services" },
  { id: "a2.4", order: 400, parentId: "a2", name: "elder_care" },
  { id: "a2.5", order: 500, parentId: "a2", name: "mental_health" },

  /*
    { id: "a3",   order: 300,                 name: "education", },
    { id: "a3.1", order: 100, parentId: "a3", name: "public_primary_schools" },
    { id: "a3.2", order: 200, parentId: "a3", name: "private_primary_schools" },
    { id: "a3.3", order: 300, parentId: "a3", name: "higher_education" },
    { id: "a3.4", order: 400, parentId: "a3", name: "special_education"},
    { id: "a3.5", order: 500, parentId: "a3", name: "vocational_training"},
  */
];

const pages: API.CMS.Page[] = [
  { id: "p1", article: "a1", content: "# Residence topic", locale: "en", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p2", article: "a1", content: "# Asuinpaikka", locale: "fi", created: "04-11-2020", modified: "06-11-2020" },
  { id: "p3", article: "a1.1", content: "# Utilities", locale: "en", created: "09-10-2020", modified: "09-11-2020" },
  { id: "p4", article: "a1.1", content: "# apuohjelmat", locale: "fi", created: "10-12-2020", modified: "12-12-2020" },
  { id: "p5", article: "a1.2", content: "# Registering new address", locale: "en", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p6", article: "a1.2", content: "# Osoitetiedot", locale: "fi", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p7", article: "a1.3", content: "# Renovation permits", locale: "en", created: "17-04-2020", modified: "24-04-2020" },
  { id: "p8", article: "a1.4", content: "# Uuden kodin rakentaminen", locale: "fi", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p9", article: "a1.5", content: "# Sosiaalinen asunto", locale: "fi", created: "01-01-2020", modified: "16-02-2020" },


  { id: "p10", article: "a2", content: "# Healthcare and services", locale: "en", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p11", article: "a2", content: "# Terveydenhuolto ja palvelut", locale: "fi", created: "04-11-2020", modified: "06-11-2020" },
  { id: "p12", article: "a2.1", content: "# Hospitals around the city", locale: "en", created: "09-10-2020", modified: "09-11-2020" },
  { id: "p13", article: "a2.1", content: "# sairaala", locale: "fi", created: "10-12-2020", modified: "12-12-2020" },
  { id: "p14", article: "a2.2", content: "# Emergency", locale: "en", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p15", article: "a2.2", content: "# Hätä", locale: "fi", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p16", article: "a2.3", content: "# Elderly care services", locale: "en", created: "17-04-2020", modified: "24-04-2020" },
  { id: "p17", article: "a2.4", content: "# Vanhustenhoito", locale: "fi", created: "04-11-2020", modified: "05-11-2020" },
  { id: "p18", article: "a2.5", content: "# Mielenterveys", locale: "fi", created: "01-01-2020", modified: "16-02-2020" },

  /*
    { id: "p1", article: "a3",   content: "# Education",                locale: "en", created: "04-11-2020", modified: "05-11-2020" },
    { id: "p2", article: "a3",   content: "# Koulutus",                 locale: "fi", created: "04-11-2020", modified: "06-11-2020" },
    { id: "p3", article: "a3.1", content: "# Public primary schools",   locale: "en", created: "09-10-2020", modified: "09-11-2020" },
    { id: "p4", article: "a3.1", content: "# Julkiset peruskoulut",     locale: "fi", created: "10-12-2020", modified: "12-12-2020" },
    { id: "p5", article: "a3.2", content: "# Private primary education",locale: "en", created: "04-11-2020", modified: "05-11-2020" },
    { id: "p6", article: "a3.2", content: "# yksityinen peruskoulutus", locale: "fi", created: "04-11-2020", modified: "05-11-2020" },
    { id: "p7", article: "a3.3", content: "# University education",     locale: "en", created: "17-04-2020", modified: "24-04-2020" },
    { id: "p8", article: "a3.4", content: "# Korkeampi koulutus",       locale: "fi", created: "04-11-2020", modified: "05-11-2020" },
    { id: "p9", article: "a3.5", content: "# Ammatillinen koulutus",    locale: "fi", created: "01-01-2020", modified: "16-02-2020" },
  */
];

const links: API.CMS.Link[] = [
  { id: "l1", articles: ["a1", "a2", "a2.4"], type: "internal", description: "new housing developments", content: "http://www.housing-sipoo.fi/fi", locale: "fi" },
  { id: "l2", articles: ["a1"], type: "internal", description: "new housing developments", content: "http://www.housing-sipoo.fi/en", locale: "en" },
  { id: "l3", articles: ["a1"], type: "external", description: "move to finland", content: "http://www.finland.fi", locale: "fi" },
  { id: "l4", articles: ["a1"], type: "phone", description: "office phone", content: "+664-5277-7733", locale: "en" },
  { id: "l5", articles: ["a1"], type: "phone", description: "päätilintarkastajan puhelin", content: "+664-4321-1223", locale: "fi" },
  { id: "l6", articles: ["a1"], type: "internal", description: "about the service", content: "http://www.us/service/about", locale: "en" },
  { id: "l7", articles: ["a2"], type: "phone", description: "secretary phone", content: "+664-4185-6512", locale: "fi" },
  { id: "l8", articles: ["a2"], type: "phone", description: "manager phone", content: "+124-2241-1188", locale: "en" },
  { id: "l9", articles: ["a2"], type: "internal", description: "hospital information", content: "http://www.hospitals.com", locale: "fi" },
  { id: "l10", articles: ["a2"], type: "external", description: "terveys", content: "http://www.health.fi", locale: "fi" },
  { id: "l11", articles: ["a2"], type: "internal", description: "elder care", content: "http://www.vanhukset.fi", locale: "fi" },
  { id: "l12", articles: ["a2"], type: "phone", description: "secretary phone", content: "+664-4185-6512", locale: "fi" },
  { id: "l13", articles: ["a2"], type: "phone", description: "manager phone", content: "+124-2241-1188", locale: "en" },
  { id: "l14", articles: ["a2"], type: "internal", description: "general information", content: "http://www.example.com", locale: "fi" },
  { id: "l15", articles: ["a2"], type: "external", description: "vocational training", content: "http://www.adult-learning.com", locale: "fi" },
  { id: "l16", articles: ["a2"], type: "internal", description: "education", content: "http://www.learn.fi", locale: "fi" },


];

const workflows: API.CMS.Workflow[] = [
  { id: "w1", articles: ["a1"], name: "generalProcess1", content: "General Inquiry", locale: "en" },
  { id: "w2", articles: ["a1"], name: "greatFlow", content: "Default Form", locale: "en" },
  { id: "w3", articles: ["a1"], name: "inquiryMgr", content: "Super good question", locale: "en" },
  { id: "w4", articles: ["a1.2"], name: "generalProcess1", content: "General Process", locale: "fi" },
  { id: "w5", articles: ["a1.3"], name: "greatFlow", content: "Default Flow", locale: "en" },
  { id: "w6", articles: ["a1.3"], name: "inquiryMgr", content: "General Question", locale: "fi" },
];

const locales: API.CMS.SiteLocale[] = [
  { id: "l1", enabled: true, value: "fi" },
  { id: "l2", enabled: true, value: "sv" },
  { id: "l3", enabled: false, value: "en" }
]

const createMock = (): API.CMS.Service => {
  const releases: API.CMS.Releases = [
    { id: "r3", name: "LATEST", created: "03/10/2021", note: "" },
    { id: "r1", name: "v1.5", created: "04/02/2021", note: "super note here" },
    { id: "r2", name: "v1.6", created: "12/02/2021", note: "Even better note here" },

  ];
  const getSite = async () => {
    return {
      pages: toRecord(pages),
      links: toRecord(links),
      articles: toRecord(articles),
      workflows: toRecord(workflows),
      release: toRecord(releases),
      locales: toRecord(locales),
    };
  }
  const getReleases = async () => {
    return releases;
  }
  return {
    getSite, getReleases,
    create: () => new MockCreateBuilder(),
    update: () => new MockUpdateBuilder(),
    delete: () => new MockDeleteBuilder()
  } as any;
}

class MockCreateBuilder implements API.CMS.CreateBuilder {
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

class MockUpdateBuilder implements API.CMS.UpdateBuilder {
  async locale(init: API.CMS.LocaleMutator): Promise<API.CMS.SiteLocale> {
    return init as any;
  }
  async article(init: API.CMS.ArticleMutator): Promise<API.CMS.Article> {
    return init as any;
  }
  async page(init: API.CMS.PageMutator): Promise<API.CMS.Page> {
    return init as any;
  }
  async link(init: API.CMS.LinkMutator): Promise<API.CMS.Link> {
    return init as any;
  }
  async workflow(init: API.CMS.WorkflowMutator): Promise<API.CMS.Workflow> {
    return init as any;
  }
}

class MockDeleteBuilder implements API.CMS.DeleteBuilder {
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
}


const toRecord = (entities: { id: string }[]): Record<string, any> => {
  const result: Record<string, any> = {};
  for (const entity of entities) {
    result[entity.id] = entity;
  }
  return result;
}

export default createMock;