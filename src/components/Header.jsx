import Image from "next/image";

export default function Header(){
    return(
        <div className="h-full md:h-screen flex flex-col md:flex md:flex-row justify-between px-20 items-center">
            <div className="mt-28 md:mt-20 flex flex-col justify-center items-center">
                <div className="px-8 md:px-0">
                    <Image className="md:max-w-[80%] mx-auto" src="/emporda.jpg" width={400} height={400} alt="EmpordaNet" style={{ width: 'auto', height: 'auto' }} />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-center md:mt-3">Servicio de Limpieza</p>
                <div className="w-screen mb-10 md:mb-0 px-10 md:px-7 md:w-[560px] mt-7 font-medium text-lg">

                    <p className="text-justify">
                    <span className=" ">S</span>omos tu equipo de confianza para que tu hogar brille como nunca en la zona del Alto/Bajo Empordán. </p> <br />
                    <p className="text-justify">Con nuestro equipo de profesionales de limpieza, cada rincón de tu hogar recibirá la atención que se merece.  </p> <br />
                    <p className="text-justify">Desde las áreas de alto tráfico hasta los rincones más difíciles de alcanzar, estamos comprometidas con la excelencia en cada detalle. ¿Listo para experimentar la magia de un hogar reluciente? ¡Contáctanos ahora y solicita tu presupuesto sin compromiso!
                    </p>
                </div>
            </div>
            <div className="md:mt-10">
                <Image src="/headerLogo.svg" width={1000} height={1000} alt="logo header" />
            </div>
        </div>
    )
}
