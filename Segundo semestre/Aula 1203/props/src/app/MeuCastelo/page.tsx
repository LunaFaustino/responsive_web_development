import Torre from "./Torre";

const MeuCastelo = () => {
    return(
        <>
            <Torre altura={10} cor="Amarelo" janelas={true}/>
            <Torre altura={20} cor="blue" janelas={false}/>
        </>
    )
}

export default MeuCastelo;