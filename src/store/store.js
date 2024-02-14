import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import chatSlice from './chat-slice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    chat:chatSlice
  },
})