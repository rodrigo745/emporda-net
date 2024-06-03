import Image from "next/image"


export default function MainDos(){

    return(
        <div>
            <div className="hidden md:block w-full z-0"><Image className=" w-full absolute z-10" src="/fondoCurvo.svg" width={1000} height={1000} alt="fondo curvo" /></div>
            <div className="block md:hidden w-full  z-0"><Image className="w-full absolute z-10" src="/fondoCurvoMovil.svg" width={500} height={500} alt="fondo curvo" /></div>
            <h4 className="text-3xl font-bold azulCo text-center p-36 z-20 relative">G<span className="text-white">alería</span></h4>
        </div>
    )
}