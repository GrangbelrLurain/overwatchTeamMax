import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { ComponentPropsWithoutRef } from "react";
import { Kotches } from "@/lib/kotch";

const KotchSwiper = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay]}
      breakpoints={{
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {Kotches.map(({ name, specs }, index) => (
        <SwiperSlide key={name}>
          <div className="flex gap-2">
            <figure className="w-20 flex-shrink-0">
              <img src="profile.jpg" />
            </figure>
            <div>
              <p className="font-black text-xl">{name}</p>
              <ul className="flex flex-wrap gap-2">
                {specs.map((spec) => (
                  <li key={`${index}_${spec}`} className="bg-orange-100 text-nowrap px-2 text-xs">
                    #{spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default KotchSwiper;
