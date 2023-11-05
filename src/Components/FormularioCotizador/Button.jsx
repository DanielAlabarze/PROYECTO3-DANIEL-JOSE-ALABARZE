import Swal from "sweetalert2";
import Toastify from "toastify-js";
import { useState } from "react";

export function Button({
  propiedadData,
  selectPropiedad,
  ubicacionData,
  selectUbicacion,
  inputMts2,
  costoM2,
  spanValorPoliza,
  setSpanValorPoliza,
}) {
  const [cotizado, setCotizado] = useState(false);

  const realizarCotizacion = () => {
    if (
      inputMts2 >= 20 &&
      selectPropiedad !== "..." &&
      selectUbicacion !== "..."
    ) {
      const factorPropiedad = propiedadData.find(
        (item) => item.tipo === selectPropiedad
      ).factor;
      const factorUbicacion = ubicacionData.find(
        (item) => item.tipo === selectUbicacion
      ).factor;
      const resultado = factorPropiedad * factorUbicacion * inputMts2 * costoM2;
      const valorPoliza = resultado.toFixed(2);
      setSpanValorPoliza(valorPoliza);
      setCotizado(true);

      Swal.fire({
        icon: "success",
        title: "Cotización realizada con éxito.",
        showConfirmButton: false,
        timer: 2000,
        width: "500px",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Debes completar todos los datos en pantalla.",
        showConfirmButton: false,
        timer: 2000,
        width: "500px",
      });
    }
  };

  const guardarEnHistorial = () => {
    if (cotizado) {
      const agragarEnHistorial = {
        fecha:
          new Date().toLocaleDateString() +
          " " +
          new Date().toLocaleTimeString(),
        propiedad: selectPropiedad,
        ubicacion: selectUbicacion,
        mts2: inputMts2,
        poliza: spanValorPoliza,
      };
      const cotizaciones = JSON.parse(localStorage.getItem("cotizacion")) || [];
      cotizaciones.push(agragarEnHistorial);
      localStorage.setItem("cotizacion", JSON.stringify(cotizaciones));

      Toastify({
        text: "Cotización guardada.",
        duration: 1200,
        newWindow: true,
        gravity: "top",
        position: "right",
        style: {
          background: "CornflowerBlue",
        },
      }).showToast();
    }
  };

  return (
    <>
      <div className="center separador">
        <button onClick={realizarCotizacion}>Cotizar</button>
      </div>
      <div className="center separador">
        <p className="importe">
          Precio estimado: $ <span id="valorPoliza">{spanValorPoliza}</span>
          <div>
            <span
              className={`guardar ${cotizado ? "" : "ocultar"}`}
              onClick={guardarEnHistorial}
              title="Guardar en historial"
            >
              💾
            </span>
          </div>
        </p>
      </div>
    </>
  );
}

export default Button;
