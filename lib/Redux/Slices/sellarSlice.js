import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllsellar } from "@/lib/API/Seller/Sellar"; 

export const fetchAllSellars = createAsyncThunk(
  "sellar/fetchAllSellars",
  async (status, { rejectWithValue }) => {
    try {
      const response = await GetAllsellar(status);
      if (response?.status === false) {
        return rejectWithValue(response.message);
      }
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const sellarSlice = createSlice({
  name: "sellar",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    resetSellarState: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSellars.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllSellars.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAllSellars.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetSellarState } = sellarSlice.actions;
export default sellarSlice.reducer;
