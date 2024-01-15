import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ComponentPropsWithoutRef } from "react";

const BannerSwiper = () => {
  const BannerBtn = ({ ...props }: ComponentPropsWithoutRef<"a">) => (
    <a
      className="absolute btn btn-sm sm:btn-md right-2 bottom-2 sm:right-8 sm:bottom-8 lg:right-16 lg:bottom-16 btn-outline text-white border-white hover:bg-orange-600"
      href="https://open.kakao.com/o/sErrvW3f"
      target="_blank"
      {...props}
    />
  );
  return (
    <Swiper
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
      modules={[Pagination, Autoplay]}
    >
      <SwiperSlide>
        <div className="relative">
          <img src="/banner_1.png" />
          <BannerBtn>지금 바로가기</BannerBtn>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative">
          <img src="/banner_2.png" />
          <BannerBtn>지금 바로가기</BannerBtn>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img src="/banner_3.png" />
          <BannerBtn>지금 바로가기</BannerBtn>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSwiper;
