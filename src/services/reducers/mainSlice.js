import { createSlice } from '@reduxjs/toolkit';

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    theme: "",
    gameStart: true,
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload
      document.documentElement.className = state.theme
    },

    gameMode: state => {
      state.gameStart = !state.gameStart
    },
  }
})

// Action creators are generated for each case reducer function
export const { setTheme, gameMode } = mainSlice.actions
export default mainSlice.reducer