import {React, memo} from "react";

const MemoHijo= ({texto, cuenta, funcion}) => {
	console.log(`${texto} se renderizó`)
	return (
		<div className="caja">
			<p>{texto}</p>
			<h1>{cuenta}</h1>
			<button className="boton" onClick={funcion}> ✔ </button>
		</div>
	);
}
export default memo(MemoHijo)