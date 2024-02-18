import React from "react";
import {Boton, Input} from './boton.jsx'
import Card from "./card.jsx";


//create your first component
const Home = () => {
	const officers = [
		{ id: 20, name: 'Captain Piett' ,boton: "botn 1"},
		{ id: 24, name: 'General Veers' ,boton: "botn 2"},
		{ id: 56, name: 'Admiral Ozzel' ,boton: "botn 3"},
		{ id: 88, name: 'Commander Jerjerrod' ,boton: "botn 5"}
	  ];

	  const titulo1 = "Kevin"
	  const titulo2 = "Noa"
	  const titulo3 = "Rosa"
	  const titulo4 = "Juanjo"

	  const texto = "Lorem fistrum amatomaa pecador qué dise usteer ahorarr jarl tiene musho peligro. Tiene musho peligro a peich ahorarr está la cosa muy malar ese hombree ese pedazo de te voy a borrar el cerito ese pedazo de tiene musho peligro por la gloria de mi madre. Ese que llega caballo blanco caballo negroorl papaar papaar ese que llega diodeno no te digo trigo por no llamarte Rodrigor benemeritaar ese que llega. Caballo blanco caballo negroorl amatomaa torpedo por la gloria de mi madre la caidita. No puedor ese que llega ese que llega fistro a wan quietooor amatomaa amatomaa torpedo. Me cago en tus muelas ese pedazo de pecador diodenoo jarl se calle ustée a peich."

	  
	return (
		<div className="text-center">
			<Boton textoBoton = "pincha aqui"/>
			<Boton textoBoton = "No pinches aqui"/>
			<Input />
			<div>
				 {officers.map(officer=> <Card titulo = {officer.name} descripcion = {officer.id}  boton={officer.boton} parrafoSolito = "esta parrafo lo estoy metiendo a la fuerza"/> )} 
				{/* {officers.map(officer => return(
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
				)} */}
			</div>
		</div>
	);
}

export default Home;
