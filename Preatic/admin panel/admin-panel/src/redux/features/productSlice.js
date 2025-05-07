import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const api = "http://localhost:3003/pro"

export const showData = createAsyncThunk("showData",async(page)=>{
    console.log(page)
    const res = await axios.get(api+`?_page=${page}&_per_page=4`);
    // console.log(res.data)
    return res.data.data
});


const initialState = {
    value: 0,
  };

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder.addCase(showData.fulfilled,(state,action)=>{
        state.value = [...action.payload]
        console.log(action.payload)
    })
  }
})

export default counterSlice.reducer