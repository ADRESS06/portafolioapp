import React from 'react'
import '../css/estilos.css'

const Navbar = (props) => {

  botones = props.btn
  
  return (
    
  <div style={{backgroundColor:props.bg,width:props.with,height:props.height,}}>
    
    <ul class="menu" id="menu">

    </ul>

  </div>
  )
}

export default Navbar

//terminar