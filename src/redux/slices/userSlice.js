import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  nom: null,
  prenom: null,
  roles: null,
  premium_till: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.nom = action.payload.nom;
      state.prenom = action.payload.prenom;
      state.roles = action.payload.roles;
      state.id = action.payload.id;
      state.premium_till = action.payload.premium_till;
    },
    clearUser: (state) => {
      state.email = null;
      state.nom = null;
      state.prenom = null;
      state.roles = null;
      state.id = null;
      state.premium_till = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
