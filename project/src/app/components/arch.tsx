import Image from 'next/image'
import arch from  'public/img/arch.png'

export default function Arch(){
    return (
        <div  className = "flex items-center justify-center">
            <button className="z-10 absolute bg-violet-500 hover:bg-violet-600  hover:ring hover:ring-violet-300 ...">
            Projects
            </button>
            <Image className = 'z-0'src={arch} alt=""/>
        </div>

    )
}