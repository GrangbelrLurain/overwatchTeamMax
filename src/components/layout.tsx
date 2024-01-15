import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Container from "./container";

const Layout = ({ children, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex flex-col min-h-screen" {...props}>
      <header className="sticky left-0 top-0 z-40 w-full px-5 bg-white bg-opacity-70">
        <Container className="flex gap-2 items-center py-5">
          <Link href="/">
            <img src="/max_logo.png" alt="max-logo" className="w-10" />
          </Link>
          <ul className="flex gap-2">
            <li>
              <Link href="/team">팀소개</Link>
            </li>
            <li>
              <Link href="/meet">문의방법</Link>
            </li>
            <li>
              <Link href="/kotch">강사진</Link>
            </li>
            <li>
              <Link href="/price">가격표</Link>
            </li>
          </ul>
        </Container>
      </header>
      {children}
      <a href="https://open.kakao.com/o/sErrvW3f" target="_blank" className="fixed right-5 bottom-5">
        <span className="tooltip tooltip-left tooltip-warning" data-tip="카카오 오픈채팅 바로가기">
          <img src="open_kakao.png" className="w-10 animate-bounce" />
        </span>
      </a>
      <footer className="flex-grow bg-gray-100 flex flex-col items-center justify-center pb-10">
        <figure className="w-32">
          <img src="max_logo_opacity.png" />
        </figure>
        <p className="text-xs">ⓒ Copyright 2024. TEAMMAX. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
