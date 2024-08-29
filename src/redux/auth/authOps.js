import { createAsyncThunk } from "@reduxjs/toolkit";
import { serverApi } from "../../config/serverApi";


 export const registerThunk = createAsyncThunk("auth/register", async (credentials, thunkAPI) => {
    try {
      const {data} = await serverApi.post("/users/signup", credentials);
      // setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
      const {data} = await serverApi.post("/users/login", credentials);
      // setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logOutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await serverApi.post("/users/logout");
//     // After a successful logout, remove the token from the HTTP header
//     clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });