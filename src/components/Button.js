import React from 'react'

export const Button = ({setModal,message}) => {
  return (
    <div>
        {message}
        <button className='btn btn-primary btn-md'
    onClick={()=>setModal(true)}>Click Here</button>
    </div>
  )
}