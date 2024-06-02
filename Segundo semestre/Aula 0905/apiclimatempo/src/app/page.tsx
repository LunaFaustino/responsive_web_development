
export default function Home() {

  const cidade = "diadema";

  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&appid=b35bb47d211400ce6ed8f98da1054b90&units=metric`;

  return (
    <>
      <h1>Clima Tempo</h1>
      <form>
        <label htmlFor="cidade">Digite o nome da cidade: </label>
        <input type="text" id="cidade" name="cidade" />
        <button type="submit">Pronto</button>
      </form>
    </>
  );
}
