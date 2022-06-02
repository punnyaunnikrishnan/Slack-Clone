//exports reducer to store
//updation of state

import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    //updates the state , enterroom is the action to be performed
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
