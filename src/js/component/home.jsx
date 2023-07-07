import React, {useState} from "react";



//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState([])

	function nuevaTarea (e){
		e.preventDefault()
		setLista([...lista, tarea])
		setTarea("")
	}

	function eliminar (id){
		let tareaNueva = []
		tareaNueva = lista.filter((item, index) => {
			if (index!== id){
				return item
			}
		})
		setLista(tareaNueva)
	}

	return (
		<>
		<div className="container">
			<div className="mb-3">
    			<label for="exampleInputEmail1" className="form-label"><h1 className="text-center">To Do List</h1></label>
    			<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
				value={tarea}
				onChange={(e) => setTarea(e.target.value)}/>
  			</div>
			<button type="submit" style={{marginBottom:"25px"}} className="btn btn-primary" onClick={nuevaTarea}>Agregar Tarea</button>
			<br/>
			<ul className="list-group">
				{lista.map((task, id) =>(
				<li className="list-group-item" key={id}>{task}
				<button className="btn btn-outline-secondary float-end" onClick={()=>eliminar(id)}><i className="fa fa-trash"></i></button>
				</li>
				))}
				<h3 className="list-group-item">{lista.length+" tareas restantes"}</h3>
			</ul>
			
		</div>
		</>
	);
};

export default Home;
