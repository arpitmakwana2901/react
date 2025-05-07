import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  id:"",
};
export const editslice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openEditmodal: (state,action) => {
      state.value = true;
      state.id=action.payload;
    },
    closeEditmodal: (state) => {
      state.value = false;
    },
  },
});

export const { openEditmodal,closeEditmodal  } = editslice.actions;
export default editslice.reducer;