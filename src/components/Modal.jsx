import '../styles/modal.css'
import { Link } from 'react-router-dom'
function Modal({setModal}) {
  return (
    <nav className="modal">
      <p onClick={()=>setModal(false)} className='boton'> volver </p>
      <Link onClick={()=>setModal(false)} className='opcion' to='/antecedentes'>Antecedentes</Link>
      <Link onClick={()=>setModal(false)} className='opcion' to='/problematica'>Problematica</Link>
      <Link onClick={()=>setModal(false)} className='opcion' to='/solucion'>Solucion</Link>
      <Link onClick={()=>setModal(false)} className='opcion' to='/modulos-propuesto'>Modulos Propuestos</Link>
    </nav>
  )
}

export default Modal