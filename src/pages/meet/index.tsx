import Container from "@/components/container";
import Head from "next/head";

const KotchPage = () => {
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
          <p>저희 맥스팀은 카카오톡 , 텔레그램으로만 문의를 받고 있습니다.</p>
          <p className="badge badge-lg font-black bg-orange-600 text-white">카카오톡 ID: MAXTEAM</p>
          <p className="badge badge-lg font-black bg-orange-600 text-white">텔레그램 ID: MAXTEAMCOM</p>
          <p>이 외에는 전부 사칭 또는 사기이니 주의해주시기 바랍니다.</p>
          <p>오픈채팅으로 익명상담을 원하시는 고객님께서는 아래 이미지 클릭해주시면 연결가능합니다.</p>
        </div>
        <div className="mx-auto w-max">
          <a className="btn bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border-orange-600" target="_blank" href="https://open.kakao.com/o/sErrvW3f">
            카카오톡 오픈채팅
          </a>
        </div>
      </Container>
    </main>
  );
};

export default KotchPage;
