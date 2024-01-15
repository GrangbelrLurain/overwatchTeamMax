import Link from "next/link";

const Page404 = () => {
  return (
    <main className="flex flex-col items-center justify-center py-40 flex-grow gap-4">
      <div className="text-center">
        <p>이런! 페이지에서 길을 잃으셨나요?</p>
        <p>이곳은 잘못된 페이지 입니다.</p>
      </div>
      <Link href="/" className="btn bg-orange-600 text-white hover:text-orange-600 hover:bg-white hover:border-orange-600">
        메인 페이지 바로가기
      </Link>
    </main>
  );
};

export default Page404;
