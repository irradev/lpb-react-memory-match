import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
   isShowAsideInfo: boolean;
   pageTitle: string;
}

const initialState: UiState = {
   isShowAsideInfo: false,
   pageTitle: '',
};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      showAsideInfo: (state, action: PayloadAction<boolean>) => {
         state.isShowAsideInfo = action.payload;
      },
      setPageTitle: (state, action: PayloadAction<string>) => {
         state.pageTitle = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { showAsideInfo, setPageTitle } = uiSlice.actions;
