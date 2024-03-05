import Container from "@/components/container";
import { Kotches } from "@/lib/kotch";
import Head from "next/head";

const KotchPage = () => {
  return (
    <main className="pb-10 px-2">
      <Head>
        <title>TEAM MAX - 강사진</title>
        <meta name="description" content="맥스팀: 오버워치 대리, 오버워치 강의, 업계 최고 강사진" />
      </Head>
      <Container className="flex flex-col gap-5">
        <h1 className="font-black text-4xl text-orange-600">강사소개</h1>
        <article className="grid sm:grid-cols-[repeat(auto-fill,_minmax(30rem,_1fr))] gap-5">
          {Kotches.map(({ name, specs }, index) => (
            <div className="flex gap-2 border rounded-lg px-5 py-5 shadow-lg" key={name}>
              <figure className="w-20 flex-shrink-0">
                <img src="profile.jpg" />
              </figure>
              <div>
                <p className="font-black text-xl">{name}</p>
                <ul className="flex flex-wrap gap-2">
                  {specs.map((spec) => (
                    <li key={`${index}_${spec}`} className="bg-orange-100 text-nowrap px-2">
                      #{spec}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </article>
        <p className="text-lg">홈페이지에 올라와있는 강사님 외 다른 강사님들도 계십니다.</p>
      </Container>
    </main>
  );
};

export default KotchPage;
