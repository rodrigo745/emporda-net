
import Image from "next/image"
export default function Galeria(props){

    return(
        <div className="flex flex-col md:flex md:flex-row md:space-x-14 text-white w-[80%] mx-auto mt-10">
            {
                props.grande === 1 &&
                <div className="w-full p-2 md:w-[350px] h-[560px] fondoAzul rounded-md"><Image className="w-full h-full" src={`/galeria/${props.carpeta}/grande.jpg`} width={300} height={300} alt="imagen" /></div>
            }
            
            <div className={`grid ${props.nCuadrosCol} gap-6 md:gap-14 w-full`}>
                {
                    [...Array(props.cantidad)].map((_, index)=> (
                        <div key={index} className={`w-[150px]  h-[110px] lg:h-[20vh] lg:w-[18vw] 2xl:h-[25vh] fondoAzul rounded-md p-2`}>
                            <Image className="w-full h-full" src={`/galeria/${props.carpeta}/${index+1}.jpg`} width={300} height={300} alt="imagen" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
