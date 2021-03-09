import React , {Fragment,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Input from './Components/Inputfield';

function App() {

//admin cp 
  const admincp = {
  username : "wael",
  password : "l5818"
}




//user after login 
const [user,setUser] =  useState({username :'',password : ''})


//erorr for login
const [err,setErr] =  useState("")

//func switching 
const switching = (det) => {
  if((det.username == admincp.username) && (det.password == admincp.password)){
    setUser({ username : det.username , password : det.password})
  }else{
   
    setErr("sorry cant input !!")
  }

}
//log out

 const handllogout = () => {
  setUser({username : "" , password : ""})
}


  //input show
  const Inputfield = () => {
    
   if(user.username=="" && user.password=="") { 
 return(<Fragment>
    <h2>Login Now</h2> 
    <span className='erorr'>{ err !="" ? err : null}</span>  
  <Input
  switching={switching} />
  
 
  
 

  </Fragment>)


   } else {
   return( <Fragment>
    <h2>Hello {user.username}</h2>
    <button onClick={() => handllogout()} className='btn btn-danger'>Log out</button>
 </Fragment>)

   }
  }
   
  


//running
  return (
    <div className='app' >
   
     
     {Inputfield()}
    
    </div>
  );
}

export default App;
