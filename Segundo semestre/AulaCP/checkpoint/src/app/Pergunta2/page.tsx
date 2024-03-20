
const Pergunta2 = () => {
    return(
        <>
            <h1>Escolha uma cor!</h1>
            <div>
                <form>
                    <input type="radio" name="cor" value="amarelo"/> Amarelo, me lembra o sol!
                    <input type="radio" name="cor" value="meio"/> Acho que verde, tranquilo
                    <input type="radio" name="cor" value="triste"/> Azul como o mar
                </form>
            </div>
        </>
    )
}

export default Pergunta2;