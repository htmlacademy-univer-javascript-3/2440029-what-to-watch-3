import { createReducer } from '@reduxjs/toolkit';
import { AuthResponse, AuthStatus } from '../types/auth';
import { setAuthStatus } from './action';
import { checkAuthorization, login, logout } from './api-action';

export interface AuthState {
  authStatus: AuthStatus;
  authedUserInfo: AuthResponse | null;
  authError: string | null;
}

const initialState: AuthState = {
  authStatus: AuthStatus.NOT_AUTHENTICATED,
  authedUserInfo: null,
  authError: null,
};

export const authReducer = createReducer(initialState, (builder) => {
  builder.addCase(setAuthStatus, (state, action) => {
    state.authStatus = action.payload;
  })
    .addCase(checkAuthorization.pending, (state) => {
      state.authStatus = AuthStatus.PENDING;
    })
    .addCase(checkAuthorization.fulfilled, (state, action) => {
      state.authStatus = action.payload.isAuthorized ? AuthStatus.AUTHENTICATED : AuthStatus.NOT_AUTHENTICATED;
      state.authedUserInfo = action.payload.content || null;
    })
    .addCase(checkAuthorization.rejected, (state) => {
      state.authStatus = AuthStatus.NOT_AUTHENTICATED;
    })
    .addCase(login.pending, (state) => {
      state.authStatus = AuthStatus.PENDING;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.authStatus = AuthStatus.AUTHENTICATED;
      state.authedUserInfo = action.payload;
    })
    .addCase(login.rejected, (state, action) => {
      state.authStatus = AuthStatus.NOT_AUTHENTICATED;
      state.authError = action.error.message || 'Failed to login';
    })
    .addCase(logout.fulfilled, (state) => {
      state.authStatus = AuthStatus.NOT_AUTHENTICATED;
      state.authedUserInfo = null;
    });
});
