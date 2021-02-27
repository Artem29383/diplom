/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    collection: {},
    fetching: true,
    collectionFetched: false,
  },
  reducers: {},
});

export default usersSlice.reducer;
