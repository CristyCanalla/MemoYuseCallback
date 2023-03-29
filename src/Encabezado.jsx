import {React, memo} from 'react'

function Encabezado() {
    console.log('Hola soy el encabezado')
  return (
    <div className='encabezado'>
        <h3>Soy el encabezado</h3>


    </div>
  )
}

export default memo(Encabezado)