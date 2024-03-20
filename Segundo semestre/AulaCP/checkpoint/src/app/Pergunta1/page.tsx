
const Pergunta1 = () => {
    return(
        <>
            <h1>Como está se sentindo hoje?</h1>
            <div>
                <form>
                    <input type="radio" name="sentimento" value="feliz"/> Estou bem :D
                    <input type="radio" name="sentimento" value="meio"/> Hmm estou mais ou menos :/
                    <input type="radio" name="sentimento" value="triste"/> Estou meio pra baixo :c
                </form>
            </div>
        </>
    )
}

export default Pergunta1;