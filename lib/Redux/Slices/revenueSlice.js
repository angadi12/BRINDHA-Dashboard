import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAllcount } from "@/lib/API/Revenue/Revenue";

export const FetchAllcount = createAsyncThunk(
  "revenue/FetchAllcount",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetAllcount();
      if (response?.status === false) {
        return rejectWithValue(response.message);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const revenueSlice = createSlice({
  name: "revenue",
  initialState: {
    data:null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllcount.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchAllcount.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(FetchAllcount.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default revenueSlice.reducer;
