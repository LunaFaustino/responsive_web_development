import Link from "next/link";
import produtos from "./produtos.json";

interface Dados{
    id: number,
    nome: string,
    preco: number,
    descricao: string,
    slug: string,
    img : string
}


const Card = () =>{
    return(
        <>
            <div className="content">
                <div className="content-card">
                    {produtos.map((produto : Dados) => (
                        <div className="card" key={produto.id}>
                            <h2>{produto.nome}</h2>
                            <p>R$ {produto.preco}</p>
                            <p>{produto.descricao}</p>
                            <Link href={"Produtos/" + produto.slug}>{produto.nome}</Link>
                            <Image src = {produto.img} width="100" ></Image>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Card;