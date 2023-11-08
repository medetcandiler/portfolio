import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMobileNav: false,
  turnToNav: false,
  isDark: true,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setShowMobileNav: (state) => {
      state.showMobileNav = !state.showMobileNav;
    },
    setTurnToNav: (state, action) => {
      state.turnToNav = action.payload;
    },
    setIsDark: (state) => {
      state.isDark = !state.isDark;
    }
  }
})

export const { setShowMobileNav, setTurnToNav, setIsDark } = navSlice.actions;
export default navSlice.reducer;

