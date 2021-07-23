import CMS from './cms';
import createMock from './spi/mock';


declare namespace API {
  export { CMS  }
}

namespace API { 
  export const mock = (): CMS.Service => {
    return createMock();
  };
}



export default API;