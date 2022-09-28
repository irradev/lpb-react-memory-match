import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

type Player = {
   id: string;
   name: string;
   score?: {
      wins: number;
      losses: number;
   };
};

export interface playersState {
   players: Player[];
}

const initialState: playersState = {
   players: [],
};

export const playersSlice = createSlice({
   name: 'players',
   initialState,
   reducers: {
      addNewPlayer: (state, action: PayloadAction<Player>) => {
         state.players.push(action.payload);
      },
   },
});

// Action creators are generated for each case reducer function
export const { addNewPlayer } = playersSlice.actions;
