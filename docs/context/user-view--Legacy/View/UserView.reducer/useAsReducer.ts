import { Reducer, useReducer } from 'react';
import { State, Action, userViewReducer, initState } from '..';

export const useAsReducer = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(userViewReducer, initState);
  return {state, dispatch};
};
