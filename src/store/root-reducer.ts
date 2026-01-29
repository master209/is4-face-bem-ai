import {combineReducers} from '@reduxjs/toolkit';

import {mainProcess} from './main-process';
import {userProcess} from './user-process';

import {NameSpace} from '../const';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Main]: mainProcess.reducer,
});
