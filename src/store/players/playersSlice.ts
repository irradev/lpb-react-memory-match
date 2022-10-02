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
   strikes: {
      total: number;
      current: number;
   };
   reloadGame: boolean;
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
   strikes: {
      total: 5,
      current: 0,
   },
   reloadGame: false,
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
      updateWinScoreToSelectedPlayer: (
         state,
         action: PayloadAction<number>
      ) => {
         state.players = state.players.map((player) => {
            if (player.id === state.selectedPlayer!.id) {
               player.score.wins = action.payload;
            }
            return player;
         });
      },
      updateLossScoreToSelectedPlayer: (
         state,
         action: PayloadAction<number>
      ) => {
         state.players = state.players.map((player) => {
            if (player.id === state.selectedPlayer!.id) {
               player.score.losses = action.payload;
            }
            return player;
         });
      },
      cleanScoresByPlayerId: (state, action: PayloadAction<string>) => {
         let index = state.players.findIndex(
            (player) => player.id === action.payload
         );
         state.players[index].score = { wins: 0, losses: 0 };
      },
      deletePlayerById: (state, action: PayloadAction<string>) => {
         state.players = state.players.filter(
            (player) => player.id !== action.payload
         );
      },
      setCurrentStrikes: (state, action: PayloadAction<number>) => {
         state.strikes.current = action.payload;
      },
      setReloadGame: (state, action: PayloadAction<boolean>) => {
         state.reloadGame = action.payload;
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   addNewPlayer,
   selectPlayerById,
   updateWinScoreToSelectedPlayer,
   updateLossScoreToSelectedPlayer,
   cleanScoresByPlayerId,
   deletePlayerById,
   setCurrentStrikes,
   setReloadGame,
} = playersSlice.actions;
