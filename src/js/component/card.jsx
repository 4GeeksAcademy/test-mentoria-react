import React from 'react'




const Card = (props) => {


    

  return (
    <div>
        <div className="card" >
            <img src={props.imagen ? props.imagen : "..."} className="card-img-top" alt="..."  style={{"width": "18rem"}} />
        <div className="card-body">
            <h5 className="card-title">{props.titulo}</h5>
            <p>{props.parrafoSolito}</p>
            <p className="card-text">{props.descripcion ? props.descripcion : "no tengo descripcion"}</p>
            <a href="#" className="btn btn-primary">{props.boton}</a>
        </div>
        </div>
    </div>
  )
}

export default Card
