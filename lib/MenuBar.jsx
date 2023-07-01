"use client"

import { useStateContext } from '@/Context/Statecontext'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaHandHolding } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'
import { BiArrowBack } from 'react-icons/bi'
import { useState } from 'react'
import Image from 'next/image'

export default function MenuBar() {

  const { value, spashPage, setValue, openMenu, handleOpen, handleClose, menu } = useStateContext();
  const [openGive, setOpenGive] = useState(false);

  return (
    <div className="h-30 z-20 fixed top-0 bg-transparent w-full flex justify-between">
      {openMenu ?
        <RxHamburgerMenu onClick={handleClose} className='cursor-pointer  my-5 mx-3 xsm:m-5 text-3xl text-white'/> :
        <RxHamburgerMenu onClick={handleOpen} className='cursor-pointer  my-5 mx-3 xsm:m-5 text-3xl text-white'/> 
      }
      {spashPage &&
        <div id="splasher" className='fixed z-40 w-full h-screen bg-black'>

        </div>
      }
      <div style={{ left: openMenu ? "0px" : "-250px"}}  className={ "z-20 w-full ml-2 block menuTransition top-14 absolute  "}>
        <div className=' mytransparentbg btnhov h-full rounded-2xl flex flex-col items-center gap-2 px-4 py-4'>
          {menu.map((item) => (
            <div  onClick={() =>{ setValue(item); handleClose()}} className={'text-white flex justify-center py-3 w-full cursor-pointer rounded-2xl flex text-base '.concat(value == item && "mytransparentbg")}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div onClick={openGive? () => setOpenGive(false) : () => setOpenGive(true)} className='my-5 mx-3 xsm:m-5 text-3xl cursor-pointer flex justify-self-end flex-col justify-center'>
        <div className='text-xl ml-1 text-red-600'><AiFillHeart/></div>
        <div style={{transform: 'translateY(-15px)'}}><FaHandHolding/></div>
      </div>
      <div className={'absolute w-full z-30 transition-dispaly justify-center items-center h-screen flex myBlacktransparent '.concat(openGive ? ' visible opacity-100' : 'collapse opacity-0')}>
        <div className='h-3/4 p-5 w-3/4 flex flex-col  gap-10 justify-center items-center bg-white rounded-3xl'>
          <div className='flex-grow rounded-2xl w-full p-1 xsm:p-3  text-2xl myButtonstyle'>
            <Image src="/give.jpg" className='rounded-2xl' fit style={{objectFit:"cover", minHeight:"100%", minWidth:"auto"}}  width={1000} height={450}/>            
          </div>
          <div className='flex-grow rounded-2xl w-full p-1 xsm:p-3 text-2xl myButtonstyle'>
            <Image src="/donations.jpg" className='rounded-2xl' fit style={{objectFit:"cover", minHeight:"100%", minWidth:"auto"}}  width={1000} height={450}/>
          </div>
        </div>
        <BiArrowBack onClick={() => setOpenGive(false)} className='absolute m-3 top-0 left-0 text-3xl '/>
      </div>
    </div>
  )
}
