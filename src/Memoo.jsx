import {React,useState, useCallback, memo} from 'react'
import Encabezado from './Encabezado'
import MemoHijo from './MemoHijo';

function Memoo() {
    const [contador, setContador] = useState(1);
	const [contador2, setContador2] = useState(10);
	const [texto, setTexto] = useState("click");

	const aumentar1 = useCallback(() => {
		setContador(contador + 1);
	},[contador]);

	const restar1 = useCallback(() => {
		setContador2(contador2 - 1);
	},[contador2]); 
	const mensaje = useCallback(() => {
		setTexto(alert('Hiciste click'))
	},[texto]);

  return (
        <div className="grid">
			
			<MemoHijo texto="Sumar 1" cuenta={contador} funcion={aumentar1} />
			<MemoHijo texto="Restar 1" cuenta={contador2} funcion={restar1} />
			<MemoHijo texto="Mensaje" cuenta={texto} funcion={mensaje} />
            <br></br>
            <hr></hr>
            <Encabezado/>
		</div>
       
  )
}

export default memo (Memoo);