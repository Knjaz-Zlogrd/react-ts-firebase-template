import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type State = {
  authToken: string | null;
  uid: string | null;
  ownEmail: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: State = {
  authToken: null,
  uid: null,
  ownEmail: null,
  loading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    addAuthToken: (state, action: PayloadAction<string | null>) => {
      state.authToken = action.payload;
    },
    addUID: (state, action: PayloadAction<string | null>) => {
      state.uid = action.payload;
    },
    addOwnEmail: (state, action: PayloadAction<string | null>) => {
      state.ownEmail = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.authToken = null;
      state.uid = null;
      state.ownEmail = null;
      state.error = null;
      state.loading = false;
    },
  },
});

export const { addAuthToken, addUID, addOwnEmail, setLoading, setError, logout } = loginSlice.actions;

export default loginSlice.reducer;
