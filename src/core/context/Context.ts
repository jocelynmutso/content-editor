import { Layout } from '../deps';

declare namespace Context {
  
  type NavType = "LINK" | "WORKFLOW" | "LOCALE";
  
  interface Nav { type: NavType; value?: string; }
  
  interface TabData {
    nav?: Nav
    withNav(nav: Nav): TabData;
  }
  
  interface Tab extends Layout.Session.Tab<TabData> {
    
  }
}

namespace Context {
  export class ImmutableTabData implements TabData {
    private _nav: Nav;
    constructor(props: { nav: Nav }) {
      this._nav = props.nav;
    }
    get nav() {
      return this._nav
    }
    withNav(nav: Nav) {
      return new ImmutableTabData({nav});
    }
  }  
}

export default Context;