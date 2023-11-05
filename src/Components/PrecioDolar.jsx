const PrecioDolar = () => {
  return (
    <div
      style={{ textAlign: `center`, justifyContent: `center`, padding: "20px" }}
    >
      <h3>Cotización del Dolar</h3>
      <iframe
        style={{
          width: "320px",
          height: "260px",
          borderRadius: "10px",
          boxShadow: "2px 4px 4px rgb(0 0 0 / 25%)",
          justifyContent: "center",
          border: "1px solid #bcbcbc",
        }}
        src="https://dolarhoy.com/i/cotizaciones/dolar-bancos-y-casas-de-cambio"
      />
    </div>
  );
};

export default PrecioDolar;
