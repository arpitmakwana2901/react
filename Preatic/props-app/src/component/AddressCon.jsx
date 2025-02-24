import React from 'react'
import AddressCard from './AddressCard'

const AddressCon = () => {
  return (
    <>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",textAlign:"center",gap:"2rem" }}>
        <AddressCard city={"Ahmedabad"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Surat"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Rajkot"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Ahmedabad"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Surat"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Rajkot"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Ahmedabad"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Surat"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Rajkot"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Ahmedabad"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Surat"} state={"Gujarat"} country={"india"}/>
        <AddressCard city={"Rajkot"} state={"Gujarat"} country={"india"}/>
        </div>
    </>
  )
}

export default AddressCon