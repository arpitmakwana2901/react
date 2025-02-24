import React from 'react'

const ProductCard = ({name,email,password}) => {
  return (
    <>
        <div style={{height:"150px", width:"250px",border:"1px solid black"}}>
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <p>Password:{password}</p>
        </div>
    </>
  )
}

export default ProductCard