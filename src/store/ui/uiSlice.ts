import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
   isShowMenu: boolean;
   isShowAsideInfo: boolean;
   pageTitle: string;
}

const initialState: UiState = {
   isShowMenu: false,
   isShowAsideInfo: false,
   pageTitle: '',
};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      showMenu: (state, action: PayloadAction<boolean>) => {
         state.isShowMenu = action.payload;
      },
      showAsideInfo: (state, action: PayloadAction<boolean>) => {
         state.isShowAsideInfo = action.payload;
      },
      setPageTitle: (state, action: PayloadAction<string>) => {
         state.pageTitle = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { showMenu, showAsideInfo, setPageTitle } = uiSlice.actions;
