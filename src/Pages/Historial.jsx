import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Historial() {
  const [cotizacion, setcotizacion] = useState([]);

  useEffect(() => {
    const historialCotizaciones =
      JSON.parse(localStorage.getItem("cotizacion")) || [];
    setcotizacion(historialCotizaciones);
  }, []);

  const borrarHistorial = () => {
    setcotizacion([]);
    localStorage.removeItem("cotizacion");
  };

  return (
    <div>
      <h1 className="center separador">Ver Historial 📋</h1>
      <div className=" center div-cotizador">
        <table style={{ color: "black", textAlign: "center" }}>
          <thead>
            <tr>
              <th>Fecha de cotización</th>
              <th>Propiedad</th>
              <th>Ubicación</th>
              <th>Metros cuadrados</th>
              <th>Póliza mensual</th>
            </tr>
          </thead>
          <tbody>
            {cotizacion.map(
              ({ fecha, propiedad, ubicacion, mts2, poliza }, index) => (
                <tr key={index}>
                  <td>{fecha}</td>
                  <td>{propiedad}</td>
                  <td>{ubicacion}</td>
                  <td>{mts2} Mts. Cuadrados</td>
                  <td>$ {poliza}</td>
                </tr>
              )
            )}
          </tbody>
        </table>

        <div className="center separador">
          <Link to="/">
            <button className="button button-outline">VOLVER A COTIZAR</button>
          </Link>
        </div>

        <div className="center separador">
          <button
            style={{ margin: "0.5rem" }}
            onClick={borrarHistorial}
            className="button button-outline"
            id="botoneshistorial"
          >
            BORRAR HISTORIAL
          </button>
        </div>
      </div>
    </div>
  );
}
export default Historial;
