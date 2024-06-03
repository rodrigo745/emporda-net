import Image from "next/image"


export default function MainDos(){

    return(
        <div>
            <div className="hidden md:block w-full z-0"><Image className=" w-full absolute z-10" src="/fondoCurvo.svg" width={1000} height={1000} alt="fondo curvo" /></div>
            <div className="block md:hidden w-full  z-0"><Image className="w-full absolute z-10" src="/fondoCurvoMovil.svg" width={500} height={500} alt="fondo curvo" /></div>
            <h4 className="text-3xl md:text-4xl font-bold azulCo text-center pt-10 md:pt-36 z-20 relative">G<span className="text-white">alería</span></h4>
            <div className="relative z-20 mt-10">
                <div className="flex justify-evenly mx-auto text-lg relative w-[80%] text-blue-300">
                    <p className="text-white font-bold border-b-4 border-blue-400 px-4 pb-3 cursor-pointer border-r-2 w-full text-center">Limpieza General</p>
                    
                    <p className="text-white font-bold px-4 cursor-pointer border-r-2 w-full text-center">Turismo Rural</p>
                    
                    <p className="text-white font-bold px-4 cursor-pointer border-r-2 w-full text-center">Nuestro Merch</p>
                    
                    <p className="text-white font-bold px-4 cursor-pointer border-r-2 w-full text-center">Residencias</p>
                    
                    <p className="text-white font-bold px-4 cursor-pointer text-center w-full">Tramuntana</p>
                </div>
                <hr className="w-[80%] mx-auto border-blue-300 "/>
            </div>
        </div>
    )
}