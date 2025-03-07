import React from "react";

const Login = () => {
  return (
    <>
      <div style={{ border: "1px solid black",width:"350px",margin:"auto",height:"300px",backgroundColor:"white",borderRadius:"8px"}}>
        <h1 style={{ textAlign: "center" ,color:"black"}}>Login</h1>
        <form style={{}}> 
          <div style={{border:"3px solid white",width:"300px",margin:"auto",height:"210px",backgroundColor:"",borderRadius:"15px",marginTop:"50px"}}>

            <div style={{ textAlign: "center",color:"black"}}>
              <label htmlFor="email">Email :</label>
              <input
                type="email"        
                id="email"
                placeholder="Please Enter Email"
                style={{ width: "200px",margin:"auto", textAlign: "center",alignItems:"center" ,display:"block",}}
              />
            </div>

            <div style={{ textAlign: "center",color:"black" }}>
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                placeholder="Please Enter Password"
                style={{ width: "200px",alignItems:"center",margin:"auto", textAlign: "center" ,display:"block",}}
              />
            </div>

            <div style={{ alignItems: "center" ,margin:"auto"}}>
              <button
                type="submit"
                style={{
                  width: "100px",
                  marginLeft:"100px",
                  marginTop:"15px",
                  alignItems: "center",
                  borderRadius:"10px solid white",
                  textAlign: "center",
                  
                }}
              >
                LOGIN
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
