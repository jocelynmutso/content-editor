import React from 'react';

import Session from './Session';
import SessionData from './SessionData';
import { Reducer, ReducerDispatch } from './Reducer';


const LayoutContext = React.createContext<Session.ContextType>({
  session: {} as Session.Instance,
  actions: {} as Session.Actions,
});

const sessionData = new SessionData({});

const LayoutProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [session, dispatch] = React.useReducer(Reducer, sessionData);
  const actions = React.useMemo(() => {
    console.log("init layout dispatch");
    return new ReducerDispatch(dispatch)
  }, [dispatch]);

  return (
    <LayoutContext.Provider value={{ session, actions }}>
      {children}
    </LayoutContext.Provider>
  );
};



const useLayout = () => {
  const result: Session.ContextType = React.useContext(LayoutContext);
  return result;
}

export { LayoutProvider, LayoutContext, useLayout };