import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY11 = "favoriteMovies";
const STORAGE_KEY12 = "favoriteGeners";

// Async thunk for fetching movies
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch("https://ww4.yts.nz/api/v2/list_movies.json");
  const json = await response.json();
  return json.data.movies;
});

// Async thunk to load favorite movies from AsyncStorage
export const loadFavoriteMovies = createAsyncThunk(
  "movies/loadFavoriteMovies",
  async () => {
    const storedFavorites = await AsyncStorage.getItem(STORAGE_KEY11);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }
);

// Async thunk to load favorite genres from AsyncStorage
export const loadFavoriteGenres = createAsyncThunk(
  "movies/loadFavoriteGenres",
  async () => {
    const storedFavorites = await AsyncStorage.getItem(STORAGE_KEY12);
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    favoriteMovies: [],
    favoriteGeners: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavoriteMovie: (state, action) => {
      const movieExists = state.favoriteMovies.some(
        (movie) => movie.id === action.payload.id
      );
      if (!movieExists) {
        state.favoriteMovies.push(action.payload);
        // Save to AsyncStorage
        AsyncStorage.setItem(
          STORAGE_KEY11,
          JSON.stringify(state.favoriteMovies)
        );
      }
    },
    removeFavoriteMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      // Update AsyncStorage
      AsyncStorage.setItem(STORAGE_KEY11, JSON.stringify(state.favoriteMovies));
    },
    selectFavoriteGenresAction: (state, action) => {
      state.favoriteGeners = action.payload;
      // Update AsyncStorage
      AsyncStorage.setItem(STORAGE_KEY12, JSON.stringify(state.favoriteGeners));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const filteredData = action.payload.filter((item) => {
          // Check if the movie has any genre that is in the favorite genres list
          return item.genres.some((genre) => state.favoriteGeners.includes(genre));
        });
        state.movies = filteredData;
        state.isLoading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loadFavoriteMovies.fulfilled, (state, action) => {
        state.favoriteMovies = action.payload;
      })
      .addCase(loadFavoriteGenres.fulfilled, (state, action) => {
        state.favoriteGeners = action.payload;
      });
  },
});

export const {
  addFavoriteMovie,
  removeFavoriteMovie,
  selectFavoriteGenresAction,
} = movieSlice.actions;
export default movieSlice.reducer;
