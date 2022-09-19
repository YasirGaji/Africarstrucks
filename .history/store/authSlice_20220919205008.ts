import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import  HYDRATE  from "next-redux-wrapper";

// Type for our state
export interface AuthState {
  authState: boolean;
}

// Initial state
const initialState: AuthState = {
  authState: false,
};

// Actual Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    // Action to set the authentication status
    setAuthState(state, action) {
      state.authState = action.payload;
    },

    _extraReducers: {
      [HYDRATE]: (state: any, action: { payload: { auth: any; }; }) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
    get extraReducers() {
      return this._extraReducers;
    },
    set extraReducers(value) {
      this._extraReducers = value;
    },

  },
});

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;
