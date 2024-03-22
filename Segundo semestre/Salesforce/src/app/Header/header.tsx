import Link from "next/link";
import "../../../public/css/header.css"

const Header = () =>{
    return(
        <>
        <header>
            <section className="header">
                <Link href="/">
                    <img src="assets/logosalesforce.png" alt="" className="logosales"/>
                </Link>
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