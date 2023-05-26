import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exp: null,
  iat: null,
  roles: null,
  username: null,
};

export const userTokenSlice = createSlice({
  name: 'userToken',
  initialState,

  reducers: {
    setUserToken: (state, action) => {
      state.exp = action.payload.exp;
      state.iat = action.payload.iat;
      state.roles = action.payload.roles;
      state.username = action.payload.username;
    },
    clearUserToken: (state) => {
      state.exp = null;
      state.iat = null;
      state.roles = null;
      state.username = null;
    },
  },
});

export const { setUserToken, clearUserToken } = userTokenSlice.actions;
export default userTokenSlice.reducer;
