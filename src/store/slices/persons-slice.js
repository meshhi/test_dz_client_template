import { createSlice } from '@reduxjs/toolkit';
import fetchAllPersons from '../async-thunks/persons-thunk';

const initialState = {
  persons: [],
  loading: false,
  error: false,
};

export const personsSlice = createSlice({
  name: 'persons',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPersons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllPersons.fulfilled, (state, action) => {
        state.loading = false;
        state.persons = action.payload;
      })
      .addCase(fetchAllPersons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
});

export default personsSlice.reducer;