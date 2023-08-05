import { createSlice } from "@reduxjs/toolkit";
import { getDepartment, getDepartmentsList } from "./department-operation";

const initialState = {
  data: [],
  itemPagination: [],
  pageNum: 1,
  error: null,
  isLoading: false,
};

const departmentsSlice = createSlice({
  name: "department",
  initialState,
  reducers: {
    plusPage(state, { payload }) {
      state.pageNum = state.pageNum + payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDepartment.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDepartment.fulfilled, (state, { payload }) => {
        state.data = payload.data;
        state.itemPagination = payload.data;
        state.isLoading = false;
      })
      .addCase(getDepartment.rejected, (state, { payload }) => {
        state.error = payload;
      })
      .addCase(getDepartmentsList.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getDepartmentsList.fulfilled, (state, { payload }) => {
        state.itemPagination = [...state.itemPagination, ...payload.data];
        state.isLoading = false;
      })
      .addCase(getDepartmentsList.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { plusPage } = departmentsSlice.actions;
export const departmentsReducer = departmentsSlice.reducer;
