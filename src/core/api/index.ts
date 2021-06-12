declare namespace API {

  interface Site {
    markdowns: Record<string, Markdown>,
    paths: Record<string, Path>
  }

  interface Markdown {
    id: string,
    created: string,
    modified: string,
    locale: string,
    content: string,
  }

  interface Path {
    id: string,
    parentId?: string,
    name: string,
    order: number,
    markdowns: string[],
  }
}

namespace API {

  export const create = (): Site => {
    const markdowns = {
      "00M": {id: '00M', created: "", modified: "", locale: "FI", content: "# content stuff here" },
      "01M": {id: '01M', created: "", modified: "", locale: "EN", content: "# content stuff here" },
      "02M": {id: '02M', created: "", modified: "", locale: "SV", content: "# content stuff here" },
    };
    const paths = {
      "000": { id: "000", name: "Residency",  order: 0, markdowns: ["00M", "01M", "02M"] }, 
      "001": { id: "001", name: "Healthcare", order: 0, markdowns: ["00M", "01M", "02M"] }, 
      "002": { id: "002", name: "Business",   order: 0, markdowns: ["00M", "01M", "02M"] }, 
      
    };
    
    return {
      markdowns, paths
    };
  }

}

export default API;