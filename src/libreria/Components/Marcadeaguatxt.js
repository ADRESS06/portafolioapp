import React from 'react'

const Marcadeaguatxt = (props) => {
  return (
    <div>
    <div className='Marcadeaguatxt' style={{left:props.left,right:props.right,top:props.top,bottom:props.bottom,}}><h2 style={{fontWeight:props.grosor,fontSize:props.tamaño,color:props.color}}>{props.conten}<span style={{color:props.color2}}>{props.conten2}</span></h2></div>
    </div>
    )
}

export default Marcadeaguatxt