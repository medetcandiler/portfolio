import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedLink: null,
  showMobileNav: false,
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
    }
  }
})

export const { setSelectedLink, setShowMobileNav } = navSlice.actions;
export default navSlice.reducer;

