import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  authState : false,
};

const authSlice = createSlice({
  name : 'isUserPresent',
  intialState,
  reducers : {
    setAuthState : (state,action) => {
      state.authState = action.payload;
    }
  }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;