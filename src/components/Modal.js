import React from 'react'

export const Modal = ({setModal, pdf}) => {

  return (
    <div className='backshadow'>
        <div className='custom-modal'>
            <div className='delete-icon'
            onClick={()=>setModal(false)}>
              x
            </div>
            
            {pdf !== null&&(
                <embed type="application/pdf" src={pdf} width={100+'%'} height={100+'%'}/>
            )}
        </div>
    </div>
  )
}