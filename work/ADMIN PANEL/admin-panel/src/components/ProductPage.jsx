import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, deletedata } from '../redux/features/productSlice';
import axios from 'axios';
import { openEditmodal } from '../redux/features/editSlice';
import EditModal from './EditModel';

const ProductPage = () => {
    const[page,setPage] = useState(1);
    const[maxLength,setMaxLength] = useState([]);

    const dispatch = useDispatch();
    const product = useSelector((state)=>state.data.value);
    const isEditModalOpen = useSelector((state) => state.edit.value);


    useEffect(()=>{
        dispatch(addData(page))
        axios.get("http://localhost:3000/product").then((res)=>
        {
            console.log(res.data.length)
              setMaxLength(res.data.length)
        }
        );
    },[page])

  return (
 <>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
  {
   product && product.map((e, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center space-y-3 hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300">
        <p className="text-xs text-indigo-500 font-semibold uppercase tracking-widest">{e.category}</p>
        <img src={e.url} alt={e.name} className="w-32 h-32 object-cover rounded-lg shadow-sm" />
        <p className="text-lg font-semibold text-gray-800">{e.name}</p>
        <p className="text-xl font-bold text-indigo-600">${e.price}</p>
    
        <div className="flex gap-3 mt-2">
          <button onClick={()=>dispatch(openEditmodal(e.id))} className="px-4 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 shadow hover:shadow-md transition duration-300">
            Edit
          </button>
          <button onClick={()=>dispatch(deletedata(e.id))}  className="px-4 py-1.5 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600 shadow hover:shadow-md transition duration-300">
            Delete
          </button>
        </div>
      </div>
    ))
  }
</div>

<div className="flex justify-end mt-6 mb-[50px] pr-4">
  <div className="flex items-center space-x-3 text-sm">
  <button disabled={page===1} onClick={()=>{setPage(page-1)}} className="px-4 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 shadow hover:shadow-md transition duration-300">
            Prev
          </button>

    <span className="text-gray-600 font-medium">
      Page <span className="text-indigo-600 font-semibold">{page}</span> of <span className="text-indigo-600 font-semibold">{Math.ceil(maxLength/4)}</span>
    </span>

    <button disabled={page === Math.ceil(maxLength/4)} onClick={()=>{setPage(page+1)}} className="px-4 py-1.5 bg-indigo-500 text-white text-sm font-medium rounded-lg hover:bg-indigo-600 shadow hover:shadow-md transition duration-300">
            Next
          </button>
  </div>
</div>
{isEditModalOpen && <EditModal />}

 </>  


  )
}

export default ProductPage