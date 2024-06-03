"use client";
import { useState } from "react";
import Image from "next/image";

export default function NavBar(){

    const [ mostrar, setMostrar ] = useState(false);

    const mostrarBtn = ()=>{
        mostrar ? setMostrar(false) : setMostrar(true);
    }


    return(
        <div className="h-20 w-full fixed fondo text-white pt-4 px-5 md:px-10 flex justify-between z-50">
            <div className="">
                <Image className="mt-2 min-w-[70%] max-w-[70%] cursor-pointer" src="/empordaOscuro.png" width={140} height={140} alt="Emporda nav" style={{ width: 'auto', height: 'auto'}}/>
            </div>

            <div className="hidden md:flex space-x-14 mt-1">
                {TextNav("I", "nicio", 80)}
                {TextNav("S", "ervicios", 150)}
                {TextNav("G", "alería", 100)}
                {TextNav("C", "ontacto", 150)}
            </div>
            <div className="block md:hidden">
                <p onClick={mostrarBtn} className="text-3xl font-bold rotate-90 mt-1 cursor-pointer">|||</p>

                {
                    mostrar &&
                    <div className="absolute w-full h-[94vh] px-10 pt-10 space-y-8 fondo left-0">
                        {TextNav("I", "nicio", 80)}
                        {TextNav("S", "ervicios", 150)}
                        {TextNav("G", "alería", 100)}
                        {TextNav("C", "ontacto", 150)}
                    </div>
                }


            </div>
        </div>
    )
}


const empordaClaro = <svg xmlns="http://www.w3.org/2000/svg" width="172" height="38" viewBox="0 0 172 38">
<text id="Emporda_Net" data-name="Emporda Net" fill="#58c1e8" font-size="31" font-family="ScriptMTBold, Script MT"><tspan x="0" y="30">E</tspan><tspan y="30" fill="#fefeff">mporda </tspan><tspan y="30">N</tspan><tspan y="30" fill="#fefeff">et</tspan></text>
</svg>;

function TextNav(inicial, texto){
    const textoCompleto = <p className="azulCo text-2xl font-bold hover:border-b-4 hover:border-blue-400 transition h-10 cursor-pointer pt-1">{inicial}<span className="text-white">{texto}</span> </p>
    return textoCompleto;
}