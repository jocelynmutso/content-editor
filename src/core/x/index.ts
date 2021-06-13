import {AppContainer, AppContainerProps} from './AppContainer';

declare namespace Layout {
//interfaces
  export {
    AppContainerProps as ProviderProps
  }
}

namespace Layout {
//classes, constants, etc.
  export const Provider = AppContainer;
}

export default Layout