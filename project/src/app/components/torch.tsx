import Image from 'next/image'
import torch from  'public/img/torch.png'



export default function Torch(){
    return (
        <div className = "flex items-center justify-center">
        <div className='animate-pulse text-white absolute -mt-32 shadow-[0_0px_100px_60px_rgba(255,0,255,1)]'>
        </div>
        <Image className="object-none " src={torch} alt="" />
        </div>
    )
}