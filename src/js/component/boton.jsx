import React from 'react'
// import '../../styles/test.css'


export const Boton = (props) => {

  const handleClick =() => {
    alert('Hola Rosa, Hola Noa')
  }
    
  return (
			
      <button type="button" className="btn btn-primary" onClick={handleClick}>{props.textoBoton}</button>
  )
}

export const Input = () => {

 
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
  )
}