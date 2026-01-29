import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';

export type MainProcess = {
  activeHeaderMenuId: string;
  activePageMenu: {
    id: string;
    link: string;
  };
};

const initialState: MainProcess = {
  activeHeaderMenuId: '',
  activePageMenu: {
    id:'',
    link: ''
  },
};

export const mainProcess = createSlice({
  name: NameSpace.Main,
  initialState,
  reducers: {
    setActiveHeaderMenuId: (state, {payload: {navItemId}}) => {
      if (state.activeHeaderMenuId !== navItemId) {
        state.activeHeaderMenuId = navItemId as string;
        state.activePageMenu = {id:'', link:''}; // сбрасываем значения в прочих меню
      }
    },
    setActivePageMenuId: (state, {payload: {navItemId}}) => {
      if (state.activePageMenu['id'] !== navItemId) {
        state.activePageMenu = {id:navItemId as string, link: ''};
        state.activeHeaderMenuId = '-'; // сбрасываем значения в прочих меню
      }
    },
    setActivePageMenuLink: (state, {payload: {navLinkId}}) => {
      if (state.activePageMenu['link'] !== navLinkId) {
        const id = state.activePageMenu['id'];
        state.activePageMenu = {id, link: navLinkId as string};
      }
    },
  },
/*
  extraReducers(builder) {
    builder
      .addCase(fetchLoadOffers.pending, (state) => {
        state.isOffersLoading = true;
        state.areOffersLoaded = false;
      })
  }
*/
});

export const {
  setActiveHeaderMenuId,
  setActivePageMenuId,
  setActivePageMenuLink,
} = mainProcess.actions;
