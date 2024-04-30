import Image from "next/image";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";

const ProductPage = () => {

    const router = useRouter();
    const {id} = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try {
                const res = await fetch("../api/products.json")
                const dataProducts = await res.json();
                const foundProdct = dataProducts.find((product : {id : number}) => product.id === parseInt(id as string));
                setProduct(foundProdct);
            } catch (error) {
                console.error("Erro ao buscar produto: ", error);
            }
        }
        fetchData();
    },[id])

    if (!product) {
        return(
            <div>Produto não encontrado!</div>
        )
    }

    return(
        <>
        <h1>{product.name}</h1>
        <p>R$ {product.price.toFixed(2)}</p>
        
        {product.image && product.image.trim() !== "" ? (
            <Image src={product.image} width={100} height={100} alt={""}/>
        ): (null)}
        
        </>
    )


}

export default ProductPage;