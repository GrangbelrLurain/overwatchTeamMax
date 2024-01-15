import Container from "@/components/container";
import { prices } from "@/lib/price";
import Head from "next/head";
import { ComponentPropsWithoutRef } from "react";

const Price = () => {
  const PriceH2 = ({ ...props }: ComponentPropsWithoutRef<"h2">) => <h2 className="text-3xl font-black text-orange-600" {...props} />;
  const PriceContainer = ({ ...props }: ComponentPropsWithoutRef<"div">) => <Container className="py-5" {...props} />;
  const PriceCard = ({ ...props }: ComponentPropsWithoutRef<"div">) => <div className="flex flex-col items-center" {...props} />;
  const PriceCardP = ({ ...props }: ComponentPropsWithoutRef<"p">) => <p className="font-bold" {...props} />;
  return (
    <main className="pb-10 px-2">
      <Head>
        <title>TEAM MAX - 가격표</title>
      </Head>
      <PriceContainer>
        <PriceH2>승당제 강의</PriceH2>
        <p>원하시는 승수만큼 신속하고 빠른 승당제 강의가 진행됩니다.</p>
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-5">
          {prices.win.map(({ name, price, src }) => {
            return (
              <PriceCard key={name}>
                <img src={src} />
                <p>{name}</p>
                <PriceCardP>{price.toLocaleString()}원</PriceCardP>
              </PriceCard>
            );
          })}
        </article>
      </PriceContainer>
      <PriceContainer>
        <PriceH2>티어제 강의</PriceH2>
        <p>원하시는 티어만큼 신속하고 빠른 티어제 강의가 진행됩니다.</p>
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-5">
          {prices.tier.map(({ name, price, src }) => {
            return (
              <PriceCard key={name}>
                <img src={src} />
                <p>{name}</p>
                <PriceCardP>{price.toLocaleString()}원</PriceCardP>
              </PriceCard>
            );
          })}
        </article>
      </PriceContainer>
      <PriceContainer>
        <PriceH2>배치고사 강의</PriceH2>
        <p>오버워치 경쟁전에서 가장 중요한 시작인 배치고사를 책임져드립니다.</p>
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-5">
          {prices.batch.map(({ name, price, src }) => {
            return (
              <PriceCard key={name}>
                <img src={src} />
                <p>{name}</p>
                <PriceCardP>{price.toLocaleString()}원</PriceCardP>
              </PriceCard>
            );
          })}
        </article>
      </PriceContainer>
      <PriceContainer>
        <PriceH2>듀오 강의</PriceH2>
        <p>매판있는 트롤 때문에 힘든 게임 맥스팀 강사님들과 함께라면 다릅니다!</p>
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-5">
          {prices.duo.map(({ name, price, src }) => {
            return (
              <PriceCard key={name}>
                <img src={src} />
                <p>{name}</p>
                <PriceCardP>{price.toLocaleString()}원</PriceCardP>
              </PriceCard>
            );
          })}
        </article>
      </PriceContainer>
      <PriceContainer>
        <PriceH2>승패무관 강의</PriceH2>
        <p>원하시는 판수만큼 신속하고 빠른 승패무관 강의가 진행됩니다.</p>
        <article className="grid grid-cols-[repeat(auto-fill,_minmax(7rem,_1fr))] gap-5">
          {prices.just.map(({ name, price, src }) => {
            return (
              <PriceCard key={name}>
                <img src={src} />
                <p>{name}</p>
                <PriceCardP>{price.toLocaleString()}원</PriceCardP>
              </PriceCard>
            );
          })}
        </article>
      </PriceContainer>
      <PriceContainer>
        <PriceH2>1:1 강의</PriceH2>
        <p>맥스팀은 프로팀 코치, 아카데미 강사님들과 함께하고 있습니다.</p>
        <p>타 업체와 절대 비교할 수 없는 전문성 있는 강사들의 강의를 제공해 드립니다.</p>
        <div className="flex gap-2 py-2">
          <article className="flex gap-2 badge badge-lg bg-orange-600 text-white border-0">
            <p className="font-extrabold">1시간</p>
            <PriceCardP>25,000원</PriceCardP>
          </article>
          <article className="flex gap-2 badge badge-lg bg-orange-600 text-white border-0">
            <p className="font-extrabold">2시간</p>
            <PriceCardP>40,000원</PriceCardP>
          </article>
        </div>
      </PriceContainer>
      <div className="mx-auto w-max">
        <a className="btn bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border-orange-600" target="_blank" href="https://open.kakao.com/o/sErrvW3f">
          지금 문의하기
        </a>
      </div>
    </main>
  );
};

export default Price;
