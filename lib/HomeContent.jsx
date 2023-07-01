"use client"

import { useStateContext } from '@/Context/Statecontext'
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Select from './Select';
import Wrapper from './Wrapper';

export default function HomeContent() {

  const { openContent, setProperty,  handleContentOpen, constent, value, setValue, openMenu, handleOpen, handleClose, menu } = useStateContext();
  
  return (
    <Wrapper>
      <div className=" top-1/3 w-full h-full">
        <div style={{height: '28vh'}}></div>
        <div style={{top: '16vh'}} className="sticky ">
          <div style={{transform: 'translateY(-5vh)'}} className=" flex justify-center mb-6 text-4xl sm:text-6xl">
            {value}
          </div>
          <div className="mb-2 flex-grow mx-2 lg:mx-8 xl:mx-12 px-3 py-8 lg:py-5 rounded-3xl  mytransparentbg flex flex-col justify-center">
            <div className="flex items-center" style={{maxHeight: '450px'}}>
              <Swiper
                breakpoints={{
                  100: {
                    slidesPerView: 1.3,
                  },
                  450: {
                    slidesPerView: 2.8,
                  }, 
                  520: {
                    slidesPerView: 3.2,
                  }, 
                  850: {
                    slidesPerView: 3.8,
                  },            
                }}
                effect={"coverflow"}
                grabCursor={true}
                style={{width: "100%"}}
                spaceBetween={10}
                modules={[Pagination, Autoplay,]}
                pagination={false}
                loop={false}
              >
                {value == "Preachings" ?
                  <>
                    {constent.Preachings.map((item) => (
                      <SwiperSlide onClick={() => {handleContentOpen(); setProperty(item)}} key={item}>
                        <Select
                          item={item}
                          value={value}
                        />
                      </SwiperSlide>
                    ))}
                  </> : value == "Music" ?
                  <>
                    {constent.Music.map((item) => (
                      <SwiperSlide onClick={() => {handleContentOpen(); setProperty(item)}} key={item}>
                        <Select
                          item={item}
                          value={value}
                        />
                      </SwiperSlide>
                    ))}
                  </> : value == "Word" ?
                  <>
                    {constent.Word.map((item) => (
                      <SwiperSlide onClick={() => {handleContentOpen(); setProperty(item)}} key={item}>
                        <Select
                          item={item}
                          value={value}
                        />
                      </SwiperSlide>
                    ))}
                  </> : value == "Preachers" ?
                  <>
                    {constent.Preachers.map((item) => (
                      <SwiperSlide onClick={() => {handleContentOpen(); setProperty(item)}} key={item}>
                        <Select
                          item={item}
                          value={value}
                        />
                      </SwiperSlide>
                    ))}
                  </> : 
                  <>
                    {constent.Events.map((item) => (
                      <SwiperSlide onClick={() => {handleContentOpen(); setProperty(item)}} key={item}>
                        <Select
                          item={item}
                          value={value}
                        />
                      </SwiperSlide>
                    ))}
                  </> 
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
