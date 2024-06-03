import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Image from "next/image";


export default function Footer(){
    return(
        <div className="relative z-40 mb-20 flex flex-col md:flex md:flex-row px-10 md:px-0 justify-center">
            <div className="md:w-[50%] mt-10 md:mt-20">
                <h4 className="azulCo font-bold text-xl md:text-3xl">¡D<span className="oscuroCo">isponemos de múltiples vías de comunicación</span>!</h4>
                <div className="mt-6 md:mt-10 flex">
                    <IoCallOutline className="text-2xl md:text-4xl text-blue-400"/> 
                    <p className=" ml-2 text-md md:text-2xl font-bold">659 28 6161</p>
                </div>
                <div className="mt-5 flex">
                    <IoCallOutline className="text-2xl md:text-4xl text-blue-400"/> 
                    <p className=" ml-2 text-md md:text-2xl font-bold">611 73 4262</p>
                </div>
                <div className="mt-5 flex">
                    <FaInstagram className="text-2xl md:text-4xl text-blue-400"/> 
                    <p className=" ml-2 text-md md:text-2xl font-bold">@empordanet_serviciolimpieza</p>
                </div>
                <div className="mt-5 flex">
                    <MdMailOutline className="text-2xl md:text-4xl text-blue-400"/> 
                    <p className=" ml-2 text-md md:text-2xl font-bold">empordanetlimpieza@gmail.com</p>
                </div>
            </div>
            <div  className="md:w-[35%] mt-10 md:mt-0">
                <Image src="/footer.svg" width={600}  height={500} alt="img footer" />
            </div>
        </div>
    )
}