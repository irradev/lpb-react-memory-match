import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

type Player = {
   id: string;
   name: string;
   score: {
      wins: number;
      losses: number;
   };
};

export interface playersState {
   players: Player[];
   selectedPlayer: Player | null;
}

const initialState: playersState = {
   players: [
      {
         id: v4(),
         name: 'GUEST',
         score: {
            wins: 100,
            losses: 1,
         },
      },
   ],
   selectedPlayer: null,
};

export const playersSlice = createSlice({
   name: 'players',
   initialState,
   reducers: {
      addNewPlayer: (state, action: PayloadAction<string>) => {
         state.players.push({
            id: v4(),
            name: action.payload,
            score: {
               wins: 0,
               losses: 0,
            },
         });
      },

      selectPlayerById: (state, action: PayloadAction<string>) => {
         state.selectedPlayer = state.players.filter(
            (player) => player.id === action.payload
         )[0];
      },
      cleanScoresByPlayerId: (state, action: PayloadAction<string>) => {
         let index = state.players.findIndex(
            (player) => player.id === action.payload
         );
         console.log(state.players[index].name);
         state.players[index].score = { wins: 0, losses: 0 };
      },
      deletePlayerById: (state, action: PayloadAction<string>) => {
         state.players = state.players.filter(
            (player) => player.id !== action.payload
         );
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   addNewPlayer,
   selectPlayerById,
   cleanScoresByPlayerId,
   deletePlayerById,
} = playersSlice.actions;
