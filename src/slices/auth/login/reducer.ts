import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  user: {},
  error: '', // for error message
  loading: false,
  isUserLogout: false,
  errorMsg: false, // for error
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    apiError(state: any, action: any) {
      state.error = action.payload.data;
      state.loading = true;
      state.isUserLogout = false;
      state.errorMsg = true;
    },
    loginSuccess(state: any, action: any) {
      state.user = action.payload;
      state.loading = false;
      state.errorMsg = false;
    },
    logoutUserSuccess(state: any, action: any) {
      state.isUserLogout = true;
    },
    reset_login_flag(state) {
      state.error = null;
      state.loading = false;
      state.errorMsg = false;
    },
  },
});

export const { apiError, loginSuccess, logoutUserSuccess, reset_login_flag } = loginSlice.actions;

export default loginSlice.reducer;
