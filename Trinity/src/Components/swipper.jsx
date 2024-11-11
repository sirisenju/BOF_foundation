import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import React from "react";


const data = [
    {id: 1, content: `"I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                    the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                    sleep. the sun will not harm you by day, nor the moon by night."`, verse: "Psalm 121 1"},
    {id: 2, content: `"I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                    the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                    sleep. the sun will not harm you by day, nor the moon by night."`, verse: "Psalm 121 1"},
    {id: 2, content: `"I lift up my eyes to the hills-- where does my help come from? My help comes from the LORD, 
                    the Maker of heaven and earth. indeed, he who watches over Israel will neither slumber nor 
                    sleep. the sun will not harm you by day, nor the moon by night."`, verse: "Psalm 121 1"},
]

function Swipper() {
    return (
      <>
        <Swiper
          cssMode={true}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="instyle">
              <div className="h-full pb-4 sm:pl-4 sm:pr-4 2xl:max-w-7xl">
              <div className='w-full md:w-[80%] mx-auto flex justify-center p-8'>
                <div className='max-w-4xl text-center p-2'>
                    <p className=''>{item.content}</p>
                    <p className='pt-2 font-semibold text-xl'>{item.verse}</p>
                </div>
            </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    );
  }
  
  export default Swipper;