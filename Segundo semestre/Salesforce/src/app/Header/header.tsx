"use client"
import Link from "next/link";
import "../../../public/css/header.css"
import { useState } from "react";

const Header = () =>{

/*
    const aumentarFonte = () => {
        const body = document.body;
        const tamanhoAtual = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
        body.style.fontSize = `${tamanhoAtual + 10}px`;
     };

     const diminuirFonte = () => {
        const body = document.body;
        const tamanhoAtual = parseFloat(window.getComputedStyle(body, null).getPropertyValue('font-size'));
        body.style.fontSize = `${tamanhoAtual - 10}px`;
     };
*/

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
                    <button>Fundo escuro</button>
                    <button>Fundo claro</button>
                </section>
            </header>
        </>
    );
};

export default Header;