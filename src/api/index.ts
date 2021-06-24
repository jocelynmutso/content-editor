import CMS from './cms';
import Session from './session';
import createMock from './spi/mock';

declare namespace API {
  export { CMS, Session }
}

namespace API { 
  export const mock = (): CMS.Service => {
    return createMock();
  };
}

export default API;