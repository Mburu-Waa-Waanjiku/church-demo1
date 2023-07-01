import Image from "next/image"
import HomeContent from "@/lib/HomeContent"
import Content from "@/lib/Content"

export default function Home() {
  return (
    <main>
      <div className="fixed flex justify-center w-screen h-screen overflow-hidden bg-cyan-400">
        <Image src="/chrch.jpeg" width="1400" height="933" fit style={{objectFit:"cover", minHeight:"100%", minWidth:"100%"}}/> 
      </div>
      <Content/>
      <HomeContent/>
    </main>
  )
}
