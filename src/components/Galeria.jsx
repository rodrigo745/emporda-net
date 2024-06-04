

export default function Galeria(props){

    return(
        <div className="flex flex-col md:flex md:flex-row md:space-x-14 text-white w-[80%] mx-auto mt-10">
            {
                props.grande === 1 &&
                <div className="w-[350px] h-[560px] fondoAzul rounded-md"></div>
            }
            <div className={`grid ${props.nCuadrosCol} gap-6 md:gap-14 w-full`}>
                {
                    [...Array(props.cantidad)].map((_, index)=> (
                        <div key={index} className="w-[150px] h-[110px] lg:h-[20vh] lg:w-[18vw] 2xl:h-[25vh] fondoAzul rounded-md"></div>
                    ))
                }
            </div>
        </div>
    )
}
