import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLink: null
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setSelectedLink: (state, action) => {
      state.selectedLink = action.payload;
    }
  }
})

export const { setSelectedLink } = navSlice.actions;
export default navSlice.reducer;

