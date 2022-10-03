import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
   animatedAnimalsCollection,
   oldPicturesCollection,
} from '../../data/gameCards';

type GameCard = {
   id: string;
   name: string;
   imageUrl: string;
   info: string;
   moreInfoUrl?: string;
};

export type CardsCollection = {
   id: string;
   name: string;
   description: string;
   backgroundImage: string;
   cards: GameCard[];
};

export interface CardsStateProps {
   collections: CardsCollection[];
   selectedCollection: CardsCollection | null;
   selectedCard: GameCard | null;
}

const initialState: CardsStateProps = {
   collections: [oldPicturesCollection, animatedAnimalsCollection],
   selectedCollection: null,
   selectedCard: null,
};

export const cardsSlice = createSlice({
   name: 'cards',
   initialState,
   reducers: {
      selectCollectionById: (state, action: PayloadAction<string>) => {
         state.selectedCollection = state.collections.filter(
            (collection) => collection.id === action.payload
         )[0];
      },
      selectCardById: (state, action: PayloadAction<string>) => {
         state.selectedCard = state.selectedCollection!.cards.filter(
            (card) => card.id === action.payload
         )[0];
      },
      unselectCard: (state) => {
         state.selectedCard = null;
      },
   },
});

// Action creators are generated for each case reducer function
export const { selectCollectionById, selectCardById, unselectCard } =
   cardsSlice.actions;
