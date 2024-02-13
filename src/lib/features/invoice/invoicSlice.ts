import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IvoiceState {
  filterStatus: "all" | "draft" | "paid" | "pending";
}

const initialState: IvoiceState = {
  filterStatus: "all",
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setFilterStatus: (
      state,
      action: PayloadAction<"draft" | "paid" | "pending" | "all">
    ) => {
      state.filterStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilterStatus } = invoiceSlice.actions;

export default invoiceSlice.reducer;
