import "../styles/modulos-propuestos.css";
import Ventana from "../components/Ventana";
import imagen from "../assets/habitacions.jpg"
import imagen2 from "../assets/estudiantes.jpg"
function ModulosPropuestos() {
  

  return (
    <>
    <section className="modulos">
      <Ventana />
      <div className="content-page">
        <h1 className="text-page">Prototipo App Web</h1>
        <p className="text-page">
          Una app minimalista e intituiva para cualquier usuario.{" "}
        </p>
      </div>
      
    </section>
    <section className="modulos-imagenes">
      <img src={imagen} alt="imagen-perrona" />
      <img src={imagen2} alt="sdf" />
      <div className="botones">
      <button >Atras</button>
      <button >Siguiente</button>
      </div>
      
    </section>
    </>

  );
}

export default ModulosPropuestos;
