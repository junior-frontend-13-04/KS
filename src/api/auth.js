import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const SignIn = createAsyncThunk(
  "auth/sign-in",
  async (arg, { rejectWithValue }) => {
    try {
      const res = await API.post("api/sign-in", arg);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);

export const Register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const res = await API.post("api/register", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.res.data.message);
    }
  }
);
