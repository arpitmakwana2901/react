import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "http://localhost:3000/product";

export const addData = createAsyncThunk("addData", async (page) => {
  const res = await axios.get(api + `?_page=${page}&_per_page=4`);
  return res.data.data;
});

export const addPro = createAsyncThunk("addPro",async(obj)=>{
  const res = await axios.post(api,obj)
  return res.data;
})

export const deletedata=createAsyncThunk("deletedata",async (id)=>{
  const res = await axios.delete(api+`/${id}`);
  return res.data;
})

export const updateData =  createAsyncThunk("updateData",async()=>{
  const res = await axios.put(api+`/${obj.id}`,obj);
  return res.data
})

export const oridata=createAsyncThunk("oridata",async ()=>{
  const res = await axios.get(api);
  return res.data;
})

const initialState = {
  value: [],
  origin:[],
  cat:[],
  searched:[],
  sorted:[],

};

export const productslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    category:(state,action)=>{
      if(action.payload==="All"){
        state.cat=[...state.original];
        state.searched=[...state.cat];
        state.sorted=[...state.searched];
      }else{
        state.cat=state.original.filter((e)=>e.category.toLowerCase()==action.payload.toLowerCase());
        state.searched=[...state.cat];
        state.sorted=[...state.searched];
      }
    },
    search:(state,action)=>{
      if(action.payload===""){
        state.searched=[...state.cat];
        state.sorted=[...state.searched];
      }else{
        state.searched=state.cat.filter((e)=>{
          if(e.name.toLowerCase().trim().includes(action.payload.toLowerCase().trim())){
            return e;
          }
        })
        state.sorted=[...state.searched];
      }
    },
    increase:(state)=>{
      state.sorted=state.searched.sort((a,b)=>a.price-b.price);
    },
    decrease:(state)=>{
      state.sorted=state.searched.sort((a,b)=>b.price-a.price);
    }
  },

  extraReducers: (builder) => {
    builder.addCase(addData.fulfilled, (state, action) => {
      // console.log("action", action.payload);

      state.value = [...action.payload];
      // console.log("state", state.value);
    });
    builder.addCase(deletedata.fulfilled,(state,action)=>{
      console.log(action.payload);
    })
    builder.addCase(oridata.fulfilled,(state,action)=>{
      state.original=[...action.payload];
      state.cat=[...state.original];
      state.searched=[...state.cat];
      state.sorted=[...state.searched];
    })
  },
});

// Action creators are generated for each case reducer function

export const {category,search,increase,decrease} = productslice.actions;

export default productslice.reducer;
