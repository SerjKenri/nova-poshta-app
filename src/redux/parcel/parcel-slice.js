import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { getTtnInfo } from "./parcel-operation";

const persistConfig = {
  key: "ttn",
  whitelist: ["parcelTtns"],
  storage,
};

const initialState = {
  data: [],
  parcelTtns: [],
  parcelTtn: "",
  error: null,
  isLoading: false,
};

const parcelSlice = createSlice({
  name: "parcel",
  initialState,
  reducers: {
    addToHitory(state, { payload }) {
      if (state.parcelTtns.some((data) => data === payload)) {
        return;
      }

      state.parcelTtns = [payload, ...state.parcelTtns];
    },
    addTtn(state, { payload }) {
      state.parcelTtn = payload;
    },
    deleteTtn(state, { payload }) {
      state.parcelTtns = state.parcelTtns.filter((obj) => obj !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTtnInfo.pending, (state) => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getTtnInfo.fulfilled, (state, { payload }) => {
        state.data = payload.data[0];
        state.isLoading = false;
      })
      .addCase(getTtnInfo.rejected, (state, _) => {
        state.error = "Неправельний номер";
        state.isLoading = false;
      });
  },
});

export const { addToHitory, deleteTtn, addTtn } = parcelSlice.actions;

export const parcelReducer = persistReducer(persistConfig, parcelSlice.reducer);
