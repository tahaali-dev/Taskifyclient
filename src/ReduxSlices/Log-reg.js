import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    SetAuth: "",
  },
  reducers: {
    logReg: (state, action) => {
      state.SetAuth = action.payload;
    },
  },
});

export const { logReg } = appSlice.actions;
export const appReducer = appSlice.reducer;

// //Combine Reducers-----------------------------------------
// import { combineReducers } from "@reduxjs/toolkit";

// export const rootReducer = combineReducers({
//   app: appReducer,
//   // ... other reducers
// });
