import Image from 'next/image'
import torch from  'public/img/torch.png'



export default function Torch(){
    return (
        <Image className="object-none " src={torch} alt="" />
    )
}