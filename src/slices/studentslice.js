import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import StudentDataService from "../services/student.service";
// import { createSlice } from "@reduxjs/toolkit/dist/createSlice";
const initialState=[];
// {
//     name:'abc',
//     email:'ds',
//     age:0,
//     id:0,
//     studentlist:[{sname:'fsd'}]
// }
 
export const createStudent =createAsyncThunk("/create",async({sname,email})=>
    {
        const res =await StudentDataService.create({sname,email});
        return res.data;
    })
export const select = createAsyncThunk("/select",async()=>
{
    const res = await StudentDataService.getAll();
    return res.data

})
export const deletestudent = createAsyncThunk("/delete",async({id})=>
{
    const res = await StudentDataService.delete(id)
    return res.data;
})
export const updateStudent = createAsyncThunk("/update",async({id,data})=>
{
    const res = await StudentDataService.update(id,data);
    return res.data;
})
const baseURL = "http://localhost:8080/student";

export const studentSlice = createSlice(
    {
        name:"student",
        initialState,
        extraReducers:{
            [createStudent.fulfilled]:(state,action)=>
            {
                // state=(action.payload);
            },
            [select.fulfilled]:(state,action)=>
            {
                // console.log("full")
                // console.log(action.payload.data)
                return [...action.payload.data]
            //    []
            }
        }
       
    }
)
// export const {addstudent,deletestudent,updatestudent,selectall}=studentSlice.actions
// export const {selectall}=studentSlice.actions;
// export default   studentSlice.reducer;
const {reducer} = studentSlice;
export default reducer;