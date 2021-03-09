import React,{Fragment,useState} from 'react';


const Input = (props) => {

 // state details

 const [det ,setDet] = useState({username : "", password : ""})

 //submit 
  const handlsub = (e) => {
      e.preventDefault()
      props.switching(det);
      setDet({ username : "",password : ""})
       
   
 }


    //running
    return(<Fragment>
        <form onSubmit={(event) =>handlsub(event)}>
        <input
        type="text"
        placeholder="Write your username"
        name="username"
        className="form-control"
        onChange={(e) => setDet({...det,username : e.target.value})} value={det.username}
        />
       
        <input
        type="password"
        placeholder="******"
        name="password"
        className="form-control"
        onChange={(e) => setDet({...det,password : e.target.value})} value={det.password}
        />
         <button  className='btn btn-primary'>LOGIN</button>
         </form>
    </Fragment>
        
    )




}
export default Input ;