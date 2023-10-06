import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    notify(state, action) {
      return action.payload;
    },
    hide(state, action) {
      return ""
    }
  },
});

export const { notify, hide } = notificationSlice.actions;
export default notificationSlice.reducer;
