import Link from "next/link";
import linkJson from "./links.json";

interface Dados{
    id : number;
    name: string;
    href: string;
}

const Header = () =>{
    return(
        <>
            <header>
                <div className="content">
                    <h1>Header</h1>
                    <ul>
                        {
                            linkJson.map((item:Dados) => (
                                <li key={item.id}>
                                    <Link href={item.href}>{item.name}</Link>
                                </li>
                            )) 
                        }
                    </ul>
                </div>
            </header>
        </>
    )
}
export default Header;