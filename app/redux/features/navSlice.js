import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMobileNav: false,
  turnToNav: false,
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
    }
  }
})

export const { setShowMobileNav, setTurnToNav } = navSlice.actions;
export default navSlice.reducer;

