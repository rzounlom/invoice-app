import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface IvoiceState {
  filterStatus: "draft" | "paid" | "pending";
}

const initialState: IvoiceState = {
  filterStatus: "draft",
};

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setFilterStatus: (
      state,
      action: PayloadAction<"draft" | "paid" | "pending">
    ) => {
      state.filterStatus = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilterStatus } = invoiceSlice.actions;

export default invoiceSlice.reducer;
