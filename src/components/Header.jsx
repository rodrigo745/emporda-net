import Image from "next/image";

export default function Header(){
    return(
        <div className="h-screen flex flex-col md:flex md:flex-row justify-between px-20 items-center">
            <div className="mt-28 md:mt-0">
                <div className="scale-75 md:scale-100">
                    {empordaOscuro}
                </div>
                <p className="text-2xl md:text-3xl font-bold text-center md:mt-2">Servicio de Limpieza</p>
                <div className="w-full px-14 md:w-[560px] mt-10 font-medium">

                    <p className="text-justify">
                    <span className="azulCo font-bold">S</span>omos tu equipo de confianza para que tu hogar brille como nunca en la zona del Alto/Bajo Empordán. </p> <br />
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

const empordaOscuro = <svg xmlns="http://www.w3.org/2000/svg" width="529" height="133" viewBox="0 0 529 133">
<text id="Emporda_Net" data-name="Emporda Net" fill="#58c1e8" font-size="110" font-family="ScriptMTBold, Script MT"><tspan x="0" y="105">E</tspan><tspan y="105" fill="#273238" font-size="90">mporda </tspan><tspan y="105">N</tspan><tspan y="105" fill="#273238" font-size="90">et</tspan></text>
</svg>;
