import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getStorageValue } from '../../helpers/getLocalStorage';

const initialState: number = getStorageValue('order', [])?.length || 0;

export const cartSizeCounterSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: {
    updateCart: (state, action: PayloadAction<number>) =>
      (state = action.payload),
  },
});

export const { updateCart } = cartSizeCounterSlice.actions;

export default cartSizeCounterSlice.reducer;
