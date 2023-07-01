import Image from "next/image"

export default function Select({item, value}) {
  return (
    <div>
      <div>
        <Image src={item.image} className="rounded-2xl" alt="" height={230} width={500}/>
        <div style={{height: "70%"}} className="absolute w-full top-0 flex justify-center items-center">
          <Image className={"show ".concat(value == "Preachings" ? "block" : value ==  "Music" ? "block" : "hidden")} src='https://rhemafeast.org/wp-content/plugins/youtube-embed-plus/images/playhover.png' alt="" width={50} height={28} />
        </div>
      </div>
      <div className="text-xl ml-3 text-black">
        <div>{item.title}</div>
        <div className="text-base text-gray-300">{item.Preacher}</div>
        <div className="text-base text-gray-300">{item.date}</div>
      </div>
    </div>
  )
}
