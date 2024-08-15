import React, { useReducer } from 'react';
import './App.css';
import ClassCounter from './component/ClassCounter';
import HookCounter from './component/HookCounter';
import HookCounter46 from './component/HookCounter46';
import ClassCounter46 from './component/ClassCounter46';
import HookCounter47 from './component/HookCounter47';
import HookCounter48 from './component/HookCounter48';
import ClickCntCLass from './component/ClickCntCLass';
import ClickCntUseEff from './component/ClickCntUseEff';
import MousePositionClass from './component/MousePositionClass';
import MousePositionUseEff from './component/MousePositionUseEff';
import MouseContainer from './component/MouseContainer';
import IntervalCounterClass from './component/IntervalCounterClass';
import IntervalCounterUseEff from './component/IntervalCounterUseEff';
import DataFetching from './component/DataFetching';
import CompC from './component/CompC';
import CounterReducer from './component/CounterReducer';
import CounterReducerObj from './component/CounterReducerObj';
import CounterMultiReducer from './component/CounterMultiReducer';
import CompC1 from './component/CompC1';
import CompA1 from './component/CompA1';
import CompB1 from './component/CompB1';
import FetchDataP1 from './component/FetchDataP1';
import FetchDataP2 from './component/FetchDataP2';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
const initState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'Increase':
      return state + 1
    case 'Decrease':
      return state - 1
    case 'Reset':
      return initState
    default:
      return state
  }
}
export const CountContext = React.createContext()


function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div className="App">
      <FetchDataP1 />
      <FetchDataP2 />
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        {count}
        <CompA1 />
        <CompB1 />
        <CompC1 />
      </CountContext.Provider> */}

      {/* <UserContext.Provider value={"Linh"}>
        <ChannelContext.Provider value={'LongLinh'}>
          <CompC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <HookCounter46 />
      <CounterReducer/>
      <CounterReducerObj/>
      <CounterMultiReducer/> */}
      {/* <ClassCounter />
      <HookCounter />
      <hr></hr>
      <ClassCounter46 />
      <HookCounter46 />
      <hr></hr>
      <HookCounter47 />
      <hr></hr>
      <HookCounter48 /> */}
      {/* <ClickCntCLass /> */}
      {/* <hr></hr>
      <ClickCntUseEff /> */}
      {/* <MousePositionClass/>
      <MousePositionUseEff/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalCounterClass/>
      <IntervalCounterUseEff/> */}
      {/* <DataFetching/> */}
    </div>
  );
}

export default App;
