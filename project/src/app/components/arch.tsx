import Image from 'next/image'
import arch from  'public/img/arch.png'

export default function Arch(){
    return (
        <div>
            <button className="z-10 absolute mt-24 ml-16 bg-violet-500 hover:bg-violet-600  hover:ring hover:ring-violet-300 ...">
            Projects
            </button>
            <Image className = 'z-0'src={arch} alt=""/>
        </div>

    )
}