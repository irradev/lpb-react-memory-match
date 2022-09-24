import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './';

export const store = configureStore({
   reducer: {
      // jobs: jobSlice.reducer,
      // user: userSlice.reducer,
      // ui: uiSlice.reducer,
   },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
