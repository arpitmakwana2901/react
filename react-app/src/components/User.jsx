import React from 'react'

const User = ({data}) => {
    console.log('Userprops',)
  return (
    <>
     <h1>Name:{data.name}</h1>
     <h2>Age:{data.age}</h2>
     <h3>Gender:{data.gender}</h3>
     <h4>Address:{data.address}</h4>
    </>
  )
}

export default User