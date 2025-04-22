import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [count,setCount] = useState(1);
  // const [currentPage, setCurrentPage] = useState(1);
  // const recordsPerPage = 5;
  // const lastIndex = currentPage * recordsPerPage;
  // const firstIndex = lastIndex - recordsPerPage;
  // const records = data.slice(firstIndex, lastIndex);
  // const npage = Math.ceil(data.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:3009/users?_page=${count}&_per_page=5`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [count]);

  function handleDelete(id) {
    const deleteData = window.confirm("Would you like to delete ?");
    if (deleteData) {
      axios
        .delete("http://localhost:3009/users/" + id)
        .then((res) => {
          navigate("/");
          location.reload();
          // console.log(res.data);
          // setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }

  // function nextPage(){
  //   if(currentPage !== npage){
  //     setCurrentPage(currentPage+1);
  //   }
  // }
  // function prePage(){
  //   if(currentPage !== 1){
  //     setCurrentPage(currentPage -1)
  //   }
  // }
  // function changeCurrPage(id){
  //   setCurrentPage(id)
  // }
console.log(data.items / 5)
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
      <h1>List of Users</h1>
      <div className="w-75 rounded bg-white border shadow p-4">
        <div className="d-flex justify-content-end">
          <Link to="/create" className="btn btn-success">
            Add +
          </Link>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.data && data.data.map((user, i) => (
              <tr key={i}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                  <Link
                    to={`/read/${user.id}`}
                    className="btn btn-sm btn-info me-2"
                  >
                    Read
                  </Link>
                  <Link
                    to={`/update/${user.id}`}
                    className="btn btn-sm btn-primary me-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         {/* <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="" className="page-link" onClick={prePage}>Prev</a>
              </li>
              {
                numbers.map((num,index)=>(
                  <li className={`page-item ${currentPage == num ? 'active' :''}`} key={index}>
                    <a href="#" className="page-link" onClick={()=>changeCurrPage(num)} >{num}</a>
                  </li>
                ))
              }
            <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage} >Next</a>
                  </li>
          </ul>
         </nav> */}
         <div>
          <button disabled={count == 1} onClick={()=>setCount(count-1)}><span>Pre</span></button>
          <button><span>{count}</span></button>
          <button disabled={count == Math.ceil(data.items / 5)}  onClick={()=>setCount(count+1)} ><span>Next</span></button>
         </div>
      </div>
    </div>
  );
};

export default Home;
