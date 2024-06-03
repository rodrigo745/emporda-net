import Image from "next/image"

export default function MainUno(){

    const informacion = [["Casas", "Pisos", "Hoteles", "Camping"],["Comunidades", "Oficinas", "Mamparas", "Vidrios"],["Locales Comerciales", "Alquileres Vacacionales", "Obras Nuevas y Reformas", "Masías Rurales"]]

    return(
        <div className="h-full md:h-[90vh]  px-10 md:px-0 flex flex-col-reverse md:flex md:flex-row justify-center p-10 md:pt-40">
            <div className="hidden md:block md:w-[20%]">
                <Image src="/mainUno.svg" width={370} height={370} alt="limpieza"/>
            </div>
            <div className="md:w-[70%] 2xl:w-[53%] md:pl-10">
                <h4 className="azulCo font-bold text-2xl md:text-4xl md:ml-2">O<span className="text-black">frecemos servicio de limpieza para:</span> </h4>
                <div className="md:mt-10 2xl:mt-20 w-full hidden md:flex space-x-16  2xl:ml-32   2xl:scale-125">
                    <div className="space-y-8">
                        {
                            informacion[0].map((e,index)=> (
                                <p key={index} className="fondo text-lg font-bold rounded-md text-white p-3 w-40 text-center">{e}</p>
                            ))
                        }

                    </div>
                    <div className="space-y-8">
                        {
                            informacion[1].map((e,index)=> (
                                <p key={index} className="fondo text-lg font-bold rounded-md text-white p-3 w-52 text-center">{e}</p>
                            ))
                        }

                    </div>
                    <div className="space-y-8">
                        {
                            informacion[2].map((e,index)=> (
                                <p key={index} className="fondo text-lg font-bold rounded-md text-white p-3 w-72 text-center">{e}</p>
                            ))
                        }

                    </div>
                </div>
                <div className="flex md:hidden justify-between">
                    <div className="w-[52%] md:hidden mt-8">
                        <Image src="/mainUno.svg" width={320} height={370} alt="limpieza"/>
                    </div>
                    <div className="space-y-3 mt-10 ml-8">
                            {
                                informacion[0].map((e,index)=> (
                                    <p key={index} className="fondo text-sm font-bold rounded-md text-white p-3 w-20 text-center">{e}</p>
                                ))
                            }
                    </div>
                </div>
                <div className="md:hidden mt-5 flex justify-between">
                    <div className="flex flex-col">

                        {
                            informacion[1].map((e,index)=> (
                                index <=1 &&
                                <p key={index} className="fondo text-sm font-bold rounded-md text-white p-3 w-32 text-center mb-4">{e}</p>
                            ))
                        }
                        </div>
                        <div className="flex flex-col">
{
                            informacion[1].map((e,index)=> (
                                index >=2 &&
                                <p key={index} className="fondo text-sm font-bold rounded-md text-white p-3 w-32 text-center mb-4">{e}</p>
                            ))
                        }
                        </div>
                    </div>
                <div className="flex flex-col md:hidden space-y-4 ">
                        {
                            informacion[2].map((e,index)=> (
                                <p key={index} className="fondo text-sm font-bold rounded-md text-white p-3 text-center">{e}</p>
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}