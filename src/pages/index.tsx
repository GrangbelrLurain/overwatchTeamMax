import Image from "next/image";
import { Inter } from "next/font/google";
import Container from "@/components/container";
import Head from "next/head";
import BannerSwiper from "@/components/swiper/banner-swiper";
import KotchSwiper from "@/components/swiper/kotch-swiper";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <>
      <Head>
        <title>TEAM MAX</title>
      </Head>
      <main className="flex flex-col gap-2 pb-10 px-2">
        <Container className="rounded-lg overflow-hidden w-full">
          <BannerSwiper />
        </Container>
        <Container className="w-full flex flex-col">
          <h2 className="text-3xl font-bold text-orange-600">확실한 코칭</h2>
          <p className="text-2xl">
            TEAM MAX <b className="font-bold">강사소개</b>
          </p>
          <div className="flex justify-between">
            <p>좋은 강사님과 효과적인 강의를 진행할 수 있습니다.</p>
            <Link href="/kotch" className="btn btn-xs">강사소개 더보기</Link>
          </div>
          <div className="mt-2">
            <KotchSwiper />
          </div>
        </Container>
      </main>
    </>
  );
};

export default Home;
