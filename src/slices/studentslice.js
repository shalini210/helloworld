import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import {  } from "@reduxjs/toolkit";
import studentService from "../services/student.service";
const initialState=[];
// {
//     list:
//     [{"_id":"demo","sname":"John","semail":"jk@ldfl12","sage":412,"__v":0}]}

export const select = createAsyncThunk("/select",async()=>
{
    const res = await studentService.getAll();
    return res.data;
})
export const createStudent = createAsyncThunk("/create",async(data)=>
{

    // console.log("name is ",data.sname,"email ",data.semail)
    const res = await studentService.create(data);
    return res.data;
})
export const deleteStudent = createAsyncThunk("/delete",async({id})=>
{
    const res = await studentService.delete(id);
    return res.data
})
export const updateStudent = createAsyncThunk("/update",async({id,data})=>
{
    const res = await studentService.update(id,data)
    return res.data
})

export const studentSlice = createSlice(
    {
        name:'student',
        initialState,
        extraReducers:{
            [createStudent.fulfilled]:(state,action)=>
            {
                console.log("added")
                console.log(action.payload);
              
               
            },
            [select.fulfilled]:(state,action)=>
            {
                console.log("promise fullfilled")
                console.log(action.payload.data);
               return [...action.payload.data]
            //   return {
            //     ...state,
            //     value:action.payload.data
            //   }
                // return state;
            },
            [select.pending]:(state,action)=>
            {
                console.log("promise pending");
            }
        }
    }
)
const {reducer} = studentSlice;
export default reducer;
