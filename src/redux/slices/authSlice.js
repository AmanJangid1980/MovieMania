import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "user_token_key";
const STORAGE_KEY2 = "favoriteMovies";

// Async thunk to load the login state from AsyncStorage
export const loadAuthState = createAsyncThunk(
  "auth/loadAuthState",
  async () => {
    const token = await AsyncStorage.getItem(STORAGE_KEY);
    return token ? JSON.parse(token) : null;
  }
);

// Async thunk to handle login and save the token to AsyncStorage
export const login = createAsyncThunk("auth/login", async (userToken) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(userToken));
  return userToken;
});

// Async thunk to handle logout and remove the token from AsyncStorage
export const logout = createAsyncThunk("auth/logout", async () => {
  await AsyncStorage.removeItem(STORAGE_KEY);
  await AsyncStorage.removeItem(STORAGE_KEY2);
  return null;
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authData: -1,
    userToken: null,
    isLoading: true,
  },
  reducers: {
    AuthAction: (state, action) => {
      state.authData = action.payload;
    },
    AuthRouterChangeAction: (state, action) => {
      state.authData = 3;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAuthState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadAuthState.fulfilled, (state, action) => {
        console.log("loadAuthState++++action++++>", action.payload);
        state.userToken = action.payload;
        state.authData = action.payload == null ? 2 : 3;
        state.isLoading = false;
      })
      .addCase(loadAuthState.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.authData = 3;
        state.userToken = action.payload;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state) => {
        console.log('addCase(logout.fulfilled, called-----????')
        state.authData = 2;
        state.userToken = null;
        state.isLoading = false;
      });
  },
});

export const { AuthAction, AnotherAuthAction } = authSlice.actions;
export default authSlice.reducer;
