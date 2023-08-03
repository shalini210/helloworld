import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { select } from "../slices/studentslice";
import { createStudent } from "../slices/studentslice";
import { useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import Table from 'react-bootstrap/Table';
import { Table } from "react-bootstrap";
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
    let rows = student.map((data)=>
    {
        return(
        <tr>
          <td>{data.sname}</td>
          <td>{data.semail}</td>
          <td>{data.sage}</td>
          <td><input type="button" value="edit"></input></td>
          <td><input type="button" value="delete"></input></td>
          {/* <td>@mdo</td> */}
        </tr>)
    })
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
         <div className="card">
         <Table striped bordered hover size="sm">
      <thead>
        <tr>
          
          <th> Name</th>
          <th>email</th>
          <th>age</th>
          <th>edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
        {rows}
       
      
      </tbody>
    </Table>
         {/* <DataTable  value={student} 
         
            tableStyle={{ minWidth: '50rem' }}>
    <Column field="sname" header="Student Name"></Column>
    <Column field="semail" header="Email"></Column>
    <Column field="sage" header="Age"></Column>
    
 </DataTable>  */}
</div>
        </>
    )
}
