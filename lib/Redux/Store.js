import { configureStore } from "@reduxjs/toolkit";
import sellarSlice from "@/lib/Redux/Slices/sellarSlice"
import orderSlice from "@/lib/Redux/Slices/orderSlice"

export const store = configureStore({
  reducer: {
    sellar:sellarSlice,
    order:orderSlice
  },
});
