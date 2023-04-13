import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './services/reducers/mainSlice'
import gameSlice from './services/reducers/gameSlice'

export default configureStore({
  reducer: {
    main: mainReducer,
    game: gameSlice,
  }
})