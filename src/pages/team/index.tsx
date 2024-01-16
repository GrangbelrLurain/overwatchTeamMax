import Container from "@/components/container";
import Head from "next/head";

const TeamPage = () => {
  return (
    <main className="pb-10 px-2">
      <Head>
        <title>TEAM MAX - 팀 소개</title>
      </Head>
      <Container>
        <figure className="max-w-[40rem] mx-auto">
          <img src="team_banner.png" alt="팀 배너 이미지" />
        </figure>
        <div className="flex flex-col gap-2 max-w-[40rem] mx-auto py-4">
          <p>안녕하세요 오버워치2 전문 강의 팀 맥스팀입니다.</p>
          <p>저희는 오버워치 승당제 강의, 티어제 강의 , 배치고사 강의, 듀오 강의, 승패무관 강의, 1:1 강의 등 오버워치 관련 서비스를 제공하고 있습니다.</p>
          <p>저희 팀은 모두 최소 전 프로, 1페이지 강사님들로 구성되어 있으며, 최선을 다해 수강생분들의 목표 티어를 위해 노력할 것을 약속합니다.</p>
          <p>원하신다면 모든 강사님들이 방송으로 강의를 진행하기 때문에 실시간으로 수강생분들이 강의를 제공받으실 수 있습니다.</p>
          <p>타 업체에 비해 합리적인 가격으로 진행하고 있으니 많은 문의 부탁드립니다</p>
        </div>
      </Container>
    </main>
  );
};

export default TeamPage;
