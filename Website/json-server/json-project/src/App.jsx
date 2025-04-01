import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {} from "mdb-react-ui-kit"


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    return await axios
      .get("http://localhost:5000/users")
      .then((respose) => setData(respose.data))
      .catch((err) => console.log(err));
  };

  console.log("Data",data);

  return <></>;
};

export default App;
