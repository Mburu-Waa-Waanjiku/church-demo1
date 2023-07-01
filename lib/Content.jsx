"use client"

import Image from "next/image"
import { useStateContext } from "@/Context/Statecontext";
import { FaRegWindowMinimize } from 'react-icons/fa'

export default function Content() {

  const { property, openContent, constent, value, handleContentOpen, handleContentClose, miniContent, setMiniContent} = useStateContext();

  return (
    <>
      {openContent &&
        <div className="fixed z-50 top-0 flex justify-center w-screen h-screen overflow-hidden bg-cyan-400">
          <div className="z-10 absolute top-0 w-full">
            <div className="grid h-screen grid-cols-9">
              <div className="col-span-9  md:col-span-6 ">
                <div className="bg-black w-full flex items-center justify-between top-0 left-0 h-6">
                  <FaRegWindowMinimize style={{transform:'translateY(-5px)'}} onClick={handleContentClose} className="mx-3 text-base"/>
                  <div className="mx-3">
                    <svg xmlns="http://www.w3.org/2000/svg" style={{fill: "white"}} height="1em" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                  </div>
                </div>
                <div className="video-container">
                  <iframe 
                    className="w-fitme"
                    width="560" 
                    height="315" 
                    src={property.link} 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

                  </iframe>
                </div>
                <div className="h-full bg-black">
                </div>
              </div>
            </div>
          </div>
          <div className="mytransparentbg absolute top-0 w-full h-full"></div>
          <Image src="/chrch.jpeg" width="1400" height="933" fit style={{objectFit:"cover", minHeight:"100%", minWidth:"100%"}}/> 
        </div>
      }
    </>
  )
}
