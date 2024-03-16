import "../../../public/css/footer.css"

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <ul className="lista2">
                    <span>Mapa do Site</span>
                    <li>Início</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>Equipe</li>
                </ul>
                <ul className="lista2">
                    <span>Informações de Contato</span>
                    <li>Endereço: Rua X</li>
                    <li>Telefone: 123</li>
                    <li>E-mail: @</li>
                </ul>
                <ul className="lista2">
                    <span>Nossas redes sociais</span>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
                <div className="final">
                    <p>Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA 94105, United States</p>
                </div>            
            </footer>
        </>
    )
}

export default Footer;