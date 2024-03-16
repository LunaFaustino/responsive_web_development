import "../../../public/css/header.css"


const Header = () => {
    return(
        <>
            <header className="cabecalho">
                <div>
                    <ul className="lista">
                        <div>
                            <img src="/assets/salesforce-logo.png" alt="Logo da Salesforce" className="logo"/>
                        </div>
                        <li>Produtos</li>
                        <li>Contato</li>
                        <li>Equipe</li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;