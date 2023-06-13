import GoBackBtn from "../components/GoBackBtn";
import "../styles/problematica.css";
import imagen from '../assets/ask.png'

function Problematica() {
  return (
    <main className="problematica ">
      <div className="contenedor">
        <h1 className="titulo">Problemática</h1>
        <p>
        Como dueño y administrador de un negocio de renta de cuartos para estudiantes, es común enfrentarse al problema de saber quiénes han pagado el mes de renta y quiénes no. Esta falta de claridad en los pagos puede ser difícil de manejar y puede dar lugar a una serie de problemas y desafíos que afectan el funcionamiento del negocio.
        A continuación, se detallan algunos de los problemas más comunes asociados al negocio:
        <br />
        <br />
         - Retrasos en la recolección de pagos: <br />
         Cuando los estudiantes no envían una captura de la transferencia o recibo del banco para demostrar que han pagado, puede ser difícil rastrear quiénes han pagado y quiénes no. Esto puede resultar en retrasos en la recolección de pagos y en la necesidad de estar detrás de los estudiantes para saber si han pagado o no.
        <br />
        <br />
        - Pérdida de tiempo y recursos: <br />
        Si los estudiantes no envían pruebas de pago, puede requerir mucho tiempo y recursos para recopilar la información necesaria. El seguimiento individual de cada estudiante para saber si ha pagado o no puede ser un proceso tedioso que consume tiempo y energía.
        Ahunado a esto que necesito darme a conocer, buscando la mejor opción para mantener los departamentos siempre rentados, la única opción viable parece ser ahora una solución tecnológica.
        </p>
      </div>
      <img className="imagen" src={imagen} alt="imagen" />
    </main>
  );
}

export default Problematica;
