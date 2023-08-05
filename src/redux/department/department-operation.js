import { createAsyncThunk } from "@reduxjs/toolkit";
import { getDepartmentInfo, getDepartmentList } from "../services/novaApi";
import { toast } from "react-toastify";

export const getDepartment = createAsyncThunk(
  "department/get",
  async (data, thunk) => {
    try {
      const response = await getDepartmentInfo(data.city, data.num);
      return response;
    } catch (error) {
      toast.error("Something is wrong. Nothing found.");
      return thunk.rejectWithValue(error);
    }
  }
);

export const getDepartmentsList = createAsyncThunk(
  "departmentList/get",
  async (data, thunk) => {
    try {
      const response = await getDepartmentList(data.city, data.num);
      return response;
    } catch (error) {
      toast.error("Something is wrong. Nothing found.");
      return thunk.rejectWithValue(error);
    }
  }
);
