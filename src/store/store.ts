import { configureStore } from '@reduxjs/toolkit';
import { playersSlice, cardsSlice, uiSlice } from './';

export const store = configureStore({
   reducer: {
      players: playersSlice.reducer,
      cards: cardsSlice.reducer,
      ui: uiSlice.reducer,
      // jobs: jobSlice.reducer,
      // user: userSlice.reducer,
      // ui: uiSlice.reducer,
   },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
