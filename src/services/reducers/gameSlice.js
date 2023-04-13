import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    tie: false,
    gameOver: false,
    fields: [
        "", "", "", "", "", "", "", "", ""
    ],
    tempPlayers: [],
  },
  reducers: {
    setGameOver: (state, action) => {
      state.gameOver = action.payload
    },

    setTie: (state, action) => {
      state.tie = action.payload
    },

    setField: (state, action) => {
      let key = action.payload
      if (!state.fields[key]) {
        state.fields[key] = state.tempPlayers[0]
      }
    },

    clearFields: state => {
      state.fields = state.fields.map(item => {
        return ""
      })
    },

    setTempPlayers: (state, action) => {
      action.payload.forEach(player => {
        if (state.tempPlayers.includes(player.name)) {
          return
        }
        state.tempPlayers.push(player.name)
      })
    },

    reversPlayers: state => {
      state.tempPlayers.reverse()
    }
  }
})

// Action creators are generated for each case reducer function
export const { 
  setTie,
  setGameOver, 
  setField, 
  clearFields,
  setTempPlayers, 
  reversPlayers,
} = gameSlice.actions
export default gameSlice.reducer