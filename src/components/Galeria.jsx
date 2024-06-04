export default function Galeria(props){
    return(
        <div className="flex space-x-14 text-white w-[80%] mx-auto mt-10 h-[90%] overflow-hidden ">
            {
                props.grande === 1 &&
                <div className="w-[350px] h-[560px] fondoAzul rounded-md"></div>
            }
            <div className={`grid ${props.nCuadrosCol} gap-14`}>
                {
                    [...Array(props.cantidad)].map((_, index)=> (
                        <div key={index} className="w-[150px] h-[100px] lg:w-[350px] lg:h-[250px] fondoAzul rounded-md"></div>
                    ))
                }
            </div>
        </div>
    )
}