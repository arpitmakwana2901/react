import React, { useState } from 'react'


const Form = () => {
    const[userData,setUserData] = useState({
        userName:"",
        email:"",
        password:""
    });


  return (
    <div style={{border:"10px solid white",borderRadius:"2rem",width:"370px", height:"400px",backgroundColor:"transparent", alignItems:"center",textAlign:"center"}}>
        <h1>Registration Form</h1>
        <form action="">
            <div style={{}}>
            <div  style={{textAlign:"center"}}>
                <label htmlFor="username">User Name :</label>
                <input type="text" placeholder='Please Enter UserName' 
                id='username'
                style={{width:"200px",alignItems:"center",textAlign:"center"}}
                value={userData.userName}
                onChange={((event)=>
                    setUserData({...userData,userName:event.target.value})
                )} />
            </div>

            <div style={{textAlign:"center"}}>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' placeholder='Please Enter Email'
            style={{width:"200px",textAlign:"center"}}
            value={userData.email}
            onChange={((event)=>setUserData({...userData,email,email:event.target.value}))} />
            </div>

            <div style={{textAlign:"center"}}>
                <label htmlFor="password">Password:</label>
                <input type="password" id='password'
                placeholder='Please Enter Password'
                style={{width:"200px",textAlign:"center"}}
                value={userData.password}
                onChange={((event)=>setUserData({...userData,password:event.target.value}))} />
            </div>

            <div style={{marginLeft:"100px"}}>
                <button type='submit' 
                style={{width:"150px"}}
                >Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Form