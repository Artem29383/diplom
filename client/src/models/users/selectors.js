import { createSelector } from "@reduxjs/toolkit";

export const rootSelector = createSelector(
  state => state,
  state => state.app
)

export const collectionSelector = createSelector(
  rootSelector,
  state => state.collection
)
