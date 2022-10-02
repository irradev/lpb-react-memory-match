import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UiState {
   isShowAsideInfo: boolean;
}

const initialState: UiState = {
   isShowAsideInfo: false,
};

export const uiSlice = createSlice({
   name: 'ui',
   initialState,
   reducers: {
      showAsideInfo: (state, action: PayloadAction<boolean>) => {
         state.isShowAsideInfo = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const { showAsideInfo } = uiSlice.actions;
