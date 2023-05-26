import { configureStore } from '@reduxjs/toolkit';
import userTokenReducer from './slices/userTokenSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    userTokenReducer,
    userReducer,
  },
});
