import { createSlice } from "@reduxjs/toolkit";

let initialAuthState = { isAuthenticated: false, authDetails: {} };

const authSlice = createSlice({
  name: "authenticationSlice",
  initialState: initialAuthState,
  reducers: {
    removeAuth(state) {
      state.isAuthenticated = false;
      state.authDetails = {};
    },
    addAuth(state, action) {
      state.isAuthenticated = true;
      state.authDetails = {
        username:action.payload['name'],
        email:action.payload['email'],
        branch:action.payload['branch'],
        startYear:action.payload['startYear'],
        tagline:action.payload['tagline'],
        profilePhoto:action.payload['profilePhoto']
      };
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice;
