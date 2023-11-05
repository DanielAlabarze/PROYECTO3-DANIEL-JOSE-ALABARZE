export function Metro2({ inputMts2, setInputMts2 }) {
  return (
    <div>
      <label htmlFor="metros2">Ingresa los Metros cuadrados:</label>
      <input
        type="number"
        id="metros2"
        value={inputMts2}
        min="20"
        onChange={(e) => setInputMts2(e.target.value)}
        required
      />
    </div>
  );
}

export default Metro2;
