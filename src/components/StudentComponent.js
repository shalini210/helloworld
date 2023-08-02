import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { select } from "../slices/studentslice";
import { createStudent } from "../slices/studentslice";
import { useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
         
export default function StudentComponent()
{
    const nameRef = useRef("");
    const ageRef = useRef("");
    const emailRef = useRef("");
    const dispatch = useDispatch();  
    useEffect(()=>{
        dispatch(select())    
    },[])  
    const AddStudent =()=>{
        dispatch(createStudent({"name":nameRef.current.value,
        "email":emailRef.current.value,
        "age":ageRef.current.value}));
        dispatch(select())  
    }
    const student = useSelector((state)=>state.student)
    return(
        <>
        <p>
            Enter name:
            <input type="text" ref={nameRef} />
        </p>
        <p>
            Enter email:
            <input type="text"  ref={emailRef}/>
        </p>
        <p>
            Enter age:
            <input type="text" ref={ageRef}/>
        </p>
        
        <input type="button" value="add" onClick={()=>AddStudent()}/>
        <h4>working in student component</h4>
        {/* {JSON.stringify(student)}
         */}
         <DataTable  value={student} stripedRows  tableStyle={{ minWidth: '50rem' }}>
    <Column field="sname" header="Student Name"></Column>
    <Column field="semail" header="Email"></Column>
    <Column field="sage" header="Age"></Column>
    {/* <Column field="quantity" header="Quantity"></Column> */}
</DataTable>
        </>
    )
}
