import { useEffect } from "react"
import { useSelector,useDispatch } from "react-redux/es/exports"
// import { selectall } from "../slices/studentslice"
import { select } from "../slices/studentslice";
export default function StudentComponent()
{
    const dispatch = useDispatch();
    // useEffect(()=>{
    dispatch(select())
// },[]
    
    const student = useSelector((state)=>state.student)
    return(
        <>
        <h4>working in student component</h4>
        {JSON.stringify(student)}
        </>
    )
}