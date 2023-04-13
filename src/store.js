import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './services/reducers/mainSlice'

export default configureStore({
  reducer: {
    main: mainReducer,
  }
})