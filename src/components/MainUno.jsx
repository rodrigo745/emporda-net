import Image from "next/image"

export default function MainUno(){

    const informacion = [["Casas", "Pisos", "Hoteles", "Camping"],["Comunidades", "Oficinas", "Mamparas", "Vidrios"],["Locales Comerciales", "Alquileres Vacacionales", "Obras Nuevas y Reformas", "Masías Rurales"]]

    return(
        <div className="h-[90vh] flex flex-col-reverse md:flex md:flex-row justify-center pt-40 ">
            <div className="w-[20%]">
                <Image src="/mainUno.svg" width={400} height={400} alt="limpieza"/>
            </div>
            <div className="w-[60%] pl-14">
                <h4 className="azulCo font-bold text-4xl">O<span className="text-black">frecemos servicio de limpieza para:</span> </h4>
                <div className="mt-10 flex space-x-16">
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
            </div>
        </div>
    )
}