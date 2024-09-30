import { configureStore } from '@reduxjs/toolkit';
import { cartSizeCounterSlice } from '../slice/cartSlice';

export const store = configureStore({
  reducer: {
    purchase: cartSizeCounterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
