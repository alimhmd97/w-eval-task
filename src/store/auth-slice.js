import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLogedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: (state,user) => {
      state.isLogedIn=true;
      state.user=user;
    },
    logout: (state) => {
      state.user= null;
      state.isLogedIn= false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { authenticateUser, logout } = authSlice.actions

export default authSlice.reducer