import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: true,
  darkMode: false,
  bodyColor: true,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    toggleModal(state, action) {
      state.showModal = !state.showModal;
    },
    toggleDarkMode(state, action) {
      state.darkMode = !state.darkMode;
    },

    bodyColorHandler(state, action) {
      if (action.payload) {
        state.bodyColor = true;
      }
      if (!action.payload) {
        state.bodyColor = false;
      }
    },
  },
});

export const { toggleModal, toggleDarkMode, bodyColorHandler } =
  switchSlice.actions;
export default switchSlice.reducer;
