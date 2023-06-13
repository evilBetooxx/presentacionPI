import GoBackBtn from "../components/GoBackBtn"
import '../styles/antecedentes.css'
import imagen from '../assets/edificio.svg'

function Antecedentes() {
  return (
    <main className="antecedentes">
      
      <div className="datos-empresa">
        <p className="nombre">Estudia Confort</p>
        <p>Tuxtla Gutiérrez, Chiapas, México</p>
        <p>Blvd. Presa la Angostura #575</p>
        <p className="texto">¿Qué es?
          Se trata del arrendamiento de habitaciones para estudiantes.
          Cada habitacion cuenta con los servicios
          basicos que necesita un estudiante en su
          dia a dia, siendo estos: el agua, la luz y el internet, que 
          son indespensables para la universidad.
          Ademas, cada habitacion cuenta con cama, muebles
          para ropa, baño y escritorio para el estudio personal, asi como 
          un area de cocina.</p>
        <p className="duenio">
          Cliente: Guadalupe Nataren Orozco.
        </p>
      
        <p>Teléfono: +52 961-253-2175</p>
      </div>
      <img className="imagen" src={imagen} alt="imagen-empresa" />
    </main>
  )
}

export default Antecedentes