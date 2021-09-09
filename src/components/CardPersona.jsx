import React, { useState } from 'react'

export const CardPersona = (props) => {
  let {nombre, edad, headerClass, mostrarLogo} = props
  const [edadRender, setEdadRender] = useState(edad)
  const aumentarEdad = () => {
    // edad = edad + 1
    setEdadRender(edadRender + 1)
  }
  const reducirEdad = () => {
    setEdadRender(edadRender - 1)
  }
  return (
      <div className="card">
        <div className={headerClass}>
          {nombre}
        </div>
        <div className="card-body">
          {/* {edad}
          <br /> */}
          {edadRender}
        </div>
        <div className="card-footer">
          <button className="btn btn-danger" onClick={reducirEdad}>Disminuir</button>
          <button className="btn btn-primary" onClick={aumentarEdad}>Aumentar</button>
          <button className="btn btn-dark" onClick={mostrarLogo}>Mostrar Logo</button>
        </div>
      </div>
  )
}

// export default CardPersona;