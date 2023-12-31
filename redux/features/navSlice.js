import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnToNav: false,
  isDark: true,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setTurnToNav: (state, action) => {
      state.turnToNav = action.payload;
    },
    setIsDark: (state, action) => {
      state.isDark = action.payload;
    }
  }
});

export const { setTurnToNav, setIsDark } = navSlice.actions;
export default navSlice.reducer;
