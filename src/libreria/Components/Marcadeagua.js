import React from 'react'

const Marcadeagua = ({img},props) => {
  
  return (
    <div className='Marcadeagua' style={{left:props.left,right:props.right,top:props.top,bottom:props.bottom,}}>
      <img src={img} alt='logo'/>
    </div>
  )
}

export default Marcadeagua