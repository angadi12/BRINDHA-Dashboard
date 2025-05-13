import { configureStore } from "@reduxjs/toolkit";
import sellarSlice from "@/lib/Redux/Slices/sellarSlice"

export const store = configureStore({
  reducer: {
    sellar:sellarSlice
  },
});
