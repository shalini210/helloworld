import { useEffect,useState } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
import { select, updateStudent } from "../slices/studentslice";
import { createStudent,deleteStudent } from "../slices/studentslice";
import { useRef } from "react";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
// import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { Button, Table } from "react-bootstrap";
export default function StudentComponent()
{
  const upnameRef = useRef("");
  const upageRef = useRef("");
  const upemailRef = useRef("");
  const idRef = useRef("");
  const [show, setShow] = useState(false);
const [studentup,setStudentup] =  useState({sname:"",semail:"",sage:"",_id:""});
  const handleClose = () => setShow(false);
  const handleShow = (d) =>
  {
    setStudentup(d);
    setShow(true);
    
   
  }// setShow(true);


     
  //model code above
    const nameRef = useRef("");
    const ageRef = useRef("");
    const emailRef = useRef("");
    const dispatch = useDispatch();  
    useEffect(()=>{
        dispatch(select())  
        if(show)
        {
          
    // console.log(d)
    upnameRef.current.value=studentup.sname;
        upageRef.current.value=studentup.sage;
        upemailRef.current.value=studentup.semail;
          idRef.current.value=studentup._id;
        }
    },[show])  
    const AddStudent =()=>{
        dispatch(createStudent({"name":nameRef.current.value,
        "email":emailRef.current.value,
        "age":ageRef.current.value}));
        dispatch(select())  
    }
    const UpdateStudent=()=>
    {
      const d = {"name":upnameRef.current.value,
      "email":upemailRef.current.value,
      "age":upageRef.current.value};
     const id = idRef.current.value;
     console.log(id)
     console.log(d)
      dispatch(updateStudent({id,d}));
      dispatch(select())
      handleClose()
    }
    const DeleteStudent=(id)=>{
      if(window.confirm("Are you sure want to delete?"))
      {     
       const r = dispatch(deleteStudent(id))
      
    dispatch(select())    
    }
      else
      {
      console.log("use said no ");
      }
    }
    const student = useSelector((state)=>state.student)
    let rows = student.map((data)=>
    {
        return(
        <tr>          
          <td>{data.sname}</td>
          <td>{data.semail}</td>
          <td>{data.sage}</td>
          <td><input type="button" value="edit" onClick={()=>{handleShow(data)}}></input></td>
          <td><input type="button" value="delete" onClick={()=>DeleteStudent(data._id)}></input></td>
          {/* <td>@mdo</td> */}
        </tr>)
    })
    return(
        <>
         <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>
            Enter name:
            <input type="text"  ref={upnameRef} />
        </p>
        <p>
            Enter email:
            <input type="text"  ref={upemailRef}/>
        </p>
        <p>
            Enter age:
            <input type="text" ref={upageRef}/>
        </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" ref={idRef} onClick={()=>UpdateStudent()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
