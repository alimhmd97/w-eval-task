import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLogedIn: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authenticateUser: (state,action) => {
      
      state.isLogedIn=true;
      state.user=JSON.parse(action?.payload);
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