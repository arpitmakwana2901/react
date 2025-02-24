import React from 'react'

const AddressCard = ({city,state,country}) => {
  return (
    <>
        <div style={{height:"150px",width:"280px",border:"1px solid black"}}>
        <h1>City:{city}</h1>
        <h2>State:{state}</h2>
        <h3>Country:{country}</h3>
        </div>
    </>
  )
}

export default AddressCard