import React from 'react'

const Contenedor = (props,{img}) => {
  return (
    <div style={{backgroundColor:props.bg,backgroundImage:{img},height:props.height,width:props.width}}>
      {props.conten}
    </div>
  )
}

export default Contenedor