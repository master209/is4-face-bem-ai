import { Reducer, useReducer } from 'react';
import { State, Action, raznosReducer, initState } from '..';

export const useAsReducer = () => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(raznosReducer, initState);
  return {state, dispatch};
};
