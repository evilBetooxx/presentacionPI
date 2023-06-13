import { Link } from "react-router-dom";
import Footer from "../components/Footer";
function Index() {
  return (
    <>
      <div className="inicio">
        <h1 className="inicio-titulo">Estudia Conford</h1>
        <h4 className="inicio-p">¡Regístrate y conoce tu próxima habitación!</h4>
      </div>
      <div className="cont-boton">
      <Link to='/antecedentes' className="empezar">¡Vamos!</Link>
      </div>
      <Footer/>
    </>
  );
}

export default Index;
