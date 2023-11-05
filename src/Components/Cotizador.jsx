import { useState, useEffect } from "react";
import { Propiedad } from "./FormularioCotizador/Propiedad";
import { Ubicacion } from "./FormularioCotizador/Ubicacion";
import { Metro2 } from "./FormularioCotizador/Metro2";
import { Button } from "./FormularioCotizador/Button";

export function Cotizador() {
  const [selectPropiedad, setSelectPropiedad] = useState("...");
  const [selectUbicacion, setSelectUbicacion] = useState("...");
  const [inputMts2, setInputMts2] = useState(20);
  const [spanValorPoliza, setSpanValorPoliza] = useState("0.00");
  const [propiedadData, setPropiedadData] = useState([]);
  const [ubicacionData, setUbicacionData] = useState([]);

  const costoM2 = 35.86;

  useEffect(() => {
    fetch("/src/Components/datos.json")
      .then((response) => response.json())
      .then((data) => {
        const Propiedad = data.filter((item) => item.categoria === "propiedad");
        const Ubicacion = data.filter((item) => item.categoria === "ubicacion");

        setPropiedadData(Propiedad);
        setUbicacionData(Ubicacion);
      });
  }, []);

  return (
    <div style={{ color: "black" }} className=" center div-cotizador">
      <h2 className="center separador">Completa los datos solicitados</h2>
      <Propiedad datos={propiedadData} setPropiedad={setSelectPropiedad} />
      <Ubicacion datos={ubicacionData} setUbicacion={setSelectUbicacion} />
      <Metro2 inputMts2={inputMts2} setInputMts2={setInputMts2} />

      <Button
        propiedadData={propiedadData}
        selectPropiedad={selectPropiedad}
        ubicacionData={ubicacionData}
        selectUbicacion={selectUbicacion}
        inputMts2={inputMts2}
        costoM2={costoM2}
        spanValorPoliza={spanValorPoliza}
        setSpanValorPoliza={setSpanValorPoliza}
      />
    </div>
  );
}

export default Cotizador;
