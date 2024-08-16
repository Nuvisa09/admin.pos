import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './slices/customerSlice.jsx';

export const store = configureStore({
  reducer: {
    customers: customerReducer,
  },
});
