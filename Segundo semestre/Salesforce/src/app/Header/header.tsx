import Link from "next/link";
import "../../../public/css/header.css"

const Header = () =>{
    return(
        <>
        <header>
            <section className="header">
                <img src="assets/logosalesforce.png" alt="" className="logosales"/>
                <ul className="listaheader">
                    <Link href="/Produtos">
                        <li>Produtos</li>
                    </Link>
                    <li>Produtos</li>
                    <li>Contato</li>
                    <li>Equipe</li>
                </ul>
            </section>
            <section>

            </section>
        </header>
        </>
    )
}

export default Header;