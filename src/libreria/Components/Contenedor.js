import React from 'react'
import '../css/estilos.css'

const Contenedor = (props,{img}) => {
  return (
    <div style={{backgroundColor:props.bg,backgroundImage:{img},height:props.height,width:props.width}}>
      {props.conten}
    </div>
  )
}

export default Contenedor