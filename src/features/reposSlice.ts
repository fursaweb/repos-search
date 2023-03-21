import { IRepo } from "./../types/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface ReposState {
  isLoading: boolean;
  repos: IRepo[];
  favoriteRepos: IRepo[];
  error: string;
}

const initialState: ReposState = {
  isLoading: false,
  repos: [],
  favoriteRepos: [],
  error: "",
};

export const fetchRepos = createAsyncThunk(
  "repos/fetchRepos",
  async (query: string, thunkAPI) => {
    try {
      const response = await fetch(
        `https://api.github.com/search/repositories?q={${query}}`
      );
      const data = await response.json();
      return data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue("Error");
    }
  }
);

const reposSlice = createSlice({
  name: "repos",
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<IRepo>) {
      state.favoriteRepos.push(action.payload);
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favoriteRepos.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [fetchRepos.fulfilled.type]: (state, action: PayloadAction<IRepo[]>) => {
      state.isLoading = false;
      state.error = "";
      state.repos = action.payload;
    },
    [fetchRepos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRepos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addToFavorite, removeFromFavorites } = reposSlice.actions;

export default reposSlice.reducer;
