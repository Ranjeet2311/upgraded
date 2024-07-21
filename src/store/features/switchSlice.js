import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: true,
  darkMode: false,
};

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    toggleModal(state, action) {
      state.showModal = !state.showModal;
    },
    toggleDarkMode(state, action) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleModal, toggleDarkMode } = switchSlice.actions;
export default switchSlice.reducer;
