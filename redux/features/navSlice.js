import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  turnToNav: false,
  isDark: false,
  showMobileNav: false,
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
    },
    setShowMobileNav: (state) => {
      state.showMobileNav = !state.showMobileNav
    }
  }
});

export const { setTurnToNav, setIsDark, setShowMobileNav } = navSlice.actions;
export default navSlice.reducer;
