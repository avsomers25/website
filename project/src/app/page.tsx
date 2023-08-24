import Image from 'next/image'
import arch from  'public/img/arch.png'
import torch from 'public/img/torch.png'

export default function Home() {
  return (
    <div className = "bg-gradient-to-b from-cyan-500 to-blue-500" >
      <div className='p-4'>
      <button className="bg-violet-500 hover:bg-violet-600  hover:ring hover:ring-violet-300 ...">
      Projects
      </button>
    </div>
      <div className='grid grid-cols-5 place-items-center'>
        <div className=''>
          1
          <Image src={torch} alt=""/>
        </div>
        <div className="col-span-3">
          2
          <Image src={arch} alt=""/>
        </div>
        <div className=''>
          3
          <Image src={torch} alt=""/>
          </div>
      </div>
    </div>
  )
}
