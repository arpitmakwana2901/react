import React, { useState } from 'react'

const SignUp = () => {
    const [userName,setUserName] = useState()
    const [email,setEmail] = useState();
    const  [password,setPassword] = useState();

  return (
    <div>
        <form >
            <div>
            <label htmlFor="uname">User Name:</label>
            <input type="text" placeholder='Enter Name' 
            value={userName}
            onChange={((event)=>setUserName(event.target.value))}
            />
            </div>
       
            <div>
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder='Enter Email'
            value={email}
            onChange={((event)=>setEmail(event.target.value))} />
            </div>
            
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='Enter Password' 
            value={password}
            onChange={((event)=>setPassword(event.target.value))}/>
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default SignUp