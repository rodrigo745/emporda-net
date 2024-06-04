"use client";
import Image from "next/image"
import { useState } from "react"
import Galeria from "./Galeria";

export default function MainDos(){

    const [ pestaña, setPestaña ] = useState(0)
    const [ estilo, setEstilo ] = useState("border-b-4 border-blue-400 pb-3");
    const [ estilo1, setEstilo1 ] = useState("");
    const [ estilo2, setEstilo2 ] = useState("");
    const [ estilo3, setEstilo3 ] = useState("");
    const [ estilo4, setEstilo4 ] = useState("");


    const cambiarPestaña = (e)=>{
        switch(e.target.id){
            case "0": 
                setPestaña(0); 
                setEstilo("border-b-4 border-blue-400 pb-3") ; 
                setEstilo1("");
                setEstilo2("");
                setEstilo3("");
                setEstilo4("");
                break;
            case "1": 
                setPestaña(1); 
                setEstilo("");
                setEstilo1("border-b-4 border-blue-400 pb-3") ; 
                setEstilo2("");
                setEstilo3("");
                setEstilo4("");
                break;
                case "2": 
                    setPestaña(2); 
                    setEstilo("");
                    setEstilo1("");
                    setEstilo2("border-b-4 border-blue-400 pb-3") ; 
                    setEstilo3("");
                    setEstilo4("");
                    break;
            case "3": 
                setPestaña(3); 
                setEstilo("");
                setEstilo1("");
                setEstilo2("");
                setEstilo3("border-b-4 border-blue-400 pb-3") ; 
                setEstilo4("");
                break;
            case "4": 
                setPestaña(4); 
                setEstilo("");
                setEstilo1("");
                setEstilo2("");
                setEstilo3("");
                setEstilo4("border-b-4 border-blue-400 pb-3") ; 
                break;
        }
    }

    const base = "text-white font-bold  px-4 cursor-pointer  w-full text-center";

    return(
        <div className="h-full bg-[url('/fondoCurvo.svg')]  bg-no-repeat bg-cover">
            
            <h4 className="text-3xl md:text-4xl font-bold azulCo text-center pt-20 md:pt-36 z-20 relative">G<span className="text-white">alería</span></h4>
            <div className="relative z-20 mt-3 md:mt-10">
                <div className="hidden md:flex justify-evenly mx-auto text-lg relative w-[80%] text-blue-300">
                    <p id="0" onClick={cambiarPestaña} className={`${base} ${estilo}`}>Limpieza General</p>
                    <p id="1" onClick={cambiarPestaña} className={`${base} ${estilo1}`}>Turismo Rural</p>
                    <p id="2" onClick={cambiarPestaña} className={`${base} ${estilo2}`}>Nuestro Merch</p>
                    <p id="3" onClick={cambiarPestaña} className={`${base} ${estilo3}`}>Residencias</p>
                    <p id="4" onClick={cambiarPestaña} className={`${base} ${estilo4} border-r-0`}>Tramuntana</p>
                </div>
                <hr className="hidden md:block w-[80%] mx-auto border-blue-300 "/>
                <div className="md:hidden flex flex-col justify-evenly mx-auto text-lg relative w-[80%] text-blue-300">
                    <div className="flex">
                        <p id="0" onClick={cambiarPestaña} className={`${base} ${estilo} text-sm p-2`}>Limpieza General</p>
                        <p id="1" onClick={cambiarPestaña} className={`${base} ${estilo1} text-sm p-2`}>Turismo Rural</p>
                    </div>
                    <div className="flex">
                        <p id="2" onClick={cambiarPestaña} className={`${base} ${estilo2} text-sm p-2`}>Nuestro Merch</p>
                        <p id="3" onClick={cambiarPestaña} className={`${base} ${estilo3} text-sm p-2`}>Residencias</p>
                    </div>
                        <p id="4" onClick={cambiarPestaña} className={`${base} ${estilo4} text-sm p-2`}>Tramuntana</p>
                </div>
                <div className="md:h-[820px] h-[650px] ">
                    {pestaña == 0 && <Galeria cantidad={6} grande={1} nCuadrosCol="lg:grid-cols-3"/>}
                    {pestaña == 1 && <Galeria cantidad={3} grande={0} nCuadrosCol="lg:grid-cols-3"/>}
                    {pestaña == 2 && <Galeria cantidad={4} grande={0} nCuadrosCol="lg:grid-cols-3 "/>}
                    {pestaña == 3 && <Galeria cantidad={5} grande={1} nCuadrosCol="lg:grid-cols-3"/>}
                    {pestaña == 4 && <Galeria cantidad={8} grande={0} nCuadrosCol="2xl:grid-cols-4 lg:grid-cols-3 grid-cols-2"/>}
                </div>
            </div>
        </div>
    )
}