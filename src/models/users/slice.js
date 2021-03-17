/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    collection: [],
  },
  reducers: {
    setPhotos(state, {payload}) {
      state.collection = payload;
    }
  },
});

export const { actions } = appSlice;

export default appSlice.reducer;
