import logo from './logo.svg';
import './App.css';
import StudentComponent from './components/StudentComponent';
import Login from './components/Login';
import { useCookies } from "react-cookie";
import { useEffect, useState } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

function App() {

  
  // return(
  //   <>
    
  {/* <div class="fb-login-button" data-width="320" data-size="" data-button-type="" data-layout="" data-auto-logout-link="true" data-use-continue-as="false"></div> */}
    // </>)}
 
  const [chk,setChk]=useState(sessionStorage.length);
  const cd =(d)=>
  {
    setChk(d)
  }
  const [cmp , setCmp]=useState(<Login changeState={cd}></Login>)
    const [cookies,setCookies] =useCookies(['data']);
    useEffect(()=>{
    // console.log(cookies.email)
    console.log("value of chk is : "+chk)
    if(chk>0 || chk!="" )
    {
     setCmp(<StudentComponent changeState={cd}></StudentComponent>)
    }
    else
    {
      setCmp(<Login changeState={cd}></Login>)
    }
    console.log("localstorage "+ localStorage.getItem("email"))
    console.log("session storage : " +JSON.stringify(sessionStorage))
    console.log(sessionStorage.getItem("email"));
    
  },[chk])
  return (
    <div className="App">
      {cmp}
      {/* <StudentComponent></StudentComponent> */}
    </div>
  );

  }
export default App;
