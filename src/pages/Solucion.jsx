import imagen from '../assets/eureka2.jpeg'
import '../styles/solucion.css'

function Solucion() {
  return (
    <main className="solucion">

      <div className="contenedor">
        <h1 className='titulo'>Solución</h1>
        <p className='parrafo'>Diseñar un software que se adapte a las necesidades del cliente de forma sencilla para su uso, Una plataforma en donde los estudiantes podran efectuar sus pagos en linea, asi como rentar la habitacion que ellos esten buscando sin necesidad de acudir al establecimiento. Cada habitacion tendra un status el cual se le permitira saber si esta disponible, si se ha pagado.</p>
        <p className='parrafo'>El registro y organizar una cita puede ser unicamente con los siguientes datos:</p>

        <li>Nombre Completo.</li>
        <li>Identificacion Oficial.</li>
        <li>Numero telefonico propio y de padres.</li>
        <li>Nombre de la institucion en la que se encuentra.</li>
        <li>Documentos y fotos que argumenten sus estudios en la institucion en cuestion.</li>
        
        <p className='parrafo'>Los estudiantes tendran acceso a la plataforma simplemente para visualizar el estado de su pago y pagar su estadia. El administrador podra modificar los estados del pago si es necesario, las fotos de la habitacion, el precio, y sus caracteristicas.</p>
      </div>
      <img className='imagen' src={imagen} alt="imagen" />
    </main>
  )
}

export default Solucion