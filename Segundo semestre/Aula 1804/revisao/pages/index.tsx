import Link from "next/link";
import { useEffect, useState } from "react";


const ProductPage = () => {

    const[products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async()=>{
            try{
                const res = await fetch("./api/products.json");
                const data = await res.json();
                setProducts(data);
            } catch(error){
                console.error("Erro ao buscar os produtos", error);
            }
        };
        fetchProducts();
    },[])

    return(
        <>
            <h1>Produtos</h1>
            <ul>
                {
                    products.map(product =>(
                        <li key={product.id}>
                            <Link href={`/product/${product.id}`}>
                                <span>{product.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}

export default ProductPage;