import Image from "next/image"

export default function title() {
  return (
    <div className="fixed flex justify-center w-screen h-screen overflow-hidden bg-cyan-400">
      <Image src="/chrch.jpeg" width="1400" height="933" fit style={{objectFit:"cover", minHeight:"100%", minWidth:"auto"}}/> 
    </div>
  )
}
