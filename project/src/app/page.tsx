import Image from 'next/image'
import Arch from '../app/components/arch'
import Torch from '../app/components/torch'

export default function Home() {
  return (
    <div className="bg-black" >
      <div className='p-4'>
      </div>
      <div className='md:flex'>
        <div className='grid grid-cols-5 place-items-center md:w-1/2 '>
          <div className=''>
            <Torch></Torch>
          </div>
          <div className="col-span-3 object-none ">
            <Arch path = "/ChibiAhri"></Arch>
          </div>
          <div className=''>
          <Torch></Torch>
          </div>
        </div>
        <div className='grid grid-cols-5 place-items-center  md:w-1/2'>
          <div className=''>
          <Torch></Torch>
          </div>
          <div className="col-span-3 object-none">
            <Arch path = "/ChibiAhri"></Arch>
          </div>
          <div className=''>
          <Torch></Torch>
          </div>
        </div>

      </div>
    </div>
  )
}
