import { createAsyncThunk } from "@reduxjs/toolkit";
import { getParcelInfo } from "../services/novaApi";
import { toast } from "react-toastify";

export const getTtnInfo = createAsyncThunk(
  "parcel/get",
  async (data, thunk) => {
    try {
      const res = await getParcelInfo(data);
      if (!res.success) {
        toast.error("TTN not found");
        throw new Error();
      }

      return res;
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  }
);
