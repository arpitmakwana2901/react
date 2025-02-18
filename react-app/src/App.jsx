import {
  useState,
} from "react";


import User from "./components/User";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer  from "./components/Footer";

function App(){

  const [user,setUser] = useState({
    name:"arpit",
    age:21,
    gender:"male",
    address:"ahmeadbad"
  });

  return(
    <>
     <h1>Show User</h1>
     <User data={user} />
     
       <Navbar/>  
       <Section/>
        <Footer/>
    </>
   
  )
}

export  default App;