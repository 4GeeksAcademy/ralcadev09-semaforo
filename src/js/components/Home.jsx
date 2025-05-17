import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// este es el componente del semaforo 
const Home = () => {
	const [color, setColor] = useState("");

	// estilos para cada luz
	const red = {
		width: "80px",
		height: "80px",
		borderRadius: "50%",
		backgroundColor: "red",
		margin: "10px",
		boxShadow: color === "red"
			?
			"0 0 15px 10px red"
			:
			"none"
	};

	const yellow = {
		width: "80px",
		height: "80px",
		borderRadius: "50%",
		backgroundColor: "yellow",
		margin: "10px",
		boxShadow: color === "yellow"
			?
			"0 0 15px 10px yellow"
			:
			"none"
	};

	const green = {
		width: "80px",
		height: "80px",
		borderRadius: "50%",
		backgroundColor: "green",
		margin: "10px",
		boxShadow: color === "green"
			?
			"0 0 15px 10px green"
			:
			"none"
	};

	return (
		<div style={{
			backgroundColor: "black",
			padding: "20px",
			width: "120px",
			margin: "100px auto",
			borderRadius: "12px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center"
		}}>

			{/* luces */}
			<div onClick={() => setColor("red")} style={red}></div>
			<div onClick={() => setColor("yellow")} style={yellow}></div>
			<div onClick={() => setColor("green")} style={green}></div>
		</div>
	);
};

// renderizar en el html
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Home />);

export default Home;