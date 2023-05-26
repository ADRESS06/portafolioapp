import React from 'react'
import '../css/estilos.css'

const Boton = (props) => {
  return (

          <button style={{backgroundColor:props.bg,border:props.borde,color:props.color,boxShadow:props.sombra}}>
            {props.texto}
          </button>

  )
}

export default Boton