import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLink: null,
  showMobileNav: false,
  turnToNav: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setSelectedLink: (state, action) => {
      state.selectedLink = action.payload;
    },
    setShowMobileNav: (state) => {
      state.showMobileNav = !state.showMobileNav;
    },
    setTurnToNav: (state, action) => {
      state.turnToNav = action.payload;
    }
  }
})

export const { setSelectedLink, setShowMobileNav, setTurnToNav } = navSlice.actions;
export default navSlice.reducer;

