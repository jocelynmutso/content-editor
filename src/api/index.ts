import CMS from './cms';
import createMock from './spi/mock';
import createService from './spi/service';


declare namespace API {
  export { CMS }
}

namespace API {
  export const mock = (): CMS.Service => {
    return createMock();
  };
  export const service = (init: {store?: CMS.Store, url?: string}): CMS.Service => {
    return createService(init);
  };  
}



export default API;