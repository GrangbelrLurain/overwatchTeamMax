import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";
import Container from "./container";
import { NextSeo } from "next-seo";

const Layout = ({ children, ...props }: ComponentPropsWithoutRef<"div">) => {
  return (
    <div className="flex flex-col min-h-screen" {...props}>
      <NextSeo
        description="오버워치 대리, 오버워치 강의, 업계 최저가의 맥스팀을 만나보세요."
        canonical="https://www.xn--b02b03n87n.com/"
        openGraph={{
          title: "맥스팀",
          description:
            "오버워치 대리, 오버워치 강의, 업계 최저가의 맥스팀을 만나보세요 ",
          images: [
            {
              url: "https://raw.githubusercontent.com/GrangbelrLurain/overwatchTeamMax/master/public/team_banner.png?token=GHSAT0AAAAAACMCDGFUAJI7LOEUOKBHIEAMZNHJ5KQ",
              width: 630,
              height: 630,
              alt: "맥스팀 소개 이미지",
            },
          ],
        }}
        twitter={{
          handle: "@handle",
          site: "@site",
          cardType:
            "https://raw.githubusercontent.com/GrangbelrLurain/overwatchTeamMax/master/public/team_banner.png?token=GHSAT0AAAAAACMCDGFUAJI7LOEUOKBHIEAMZNHJ5KQ",
        }}
      />
      <div className="drawer drawer-end">
        <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <header className="sticky left-0 top-0 z-40 w-full px-5 bg-white bg-opacity-70">
            <Container className="flex gap-10 items-center py-5">
              <Link className="shrink-0 flex items-center gap-1" href="/">
                <img src="/max_logo.png" alt="max-logo" className="w-10" />
                <h1 className="text-2xl font-black text-orange-600 shrink-0">
                  맥스팀
                </h1>
              </Link>
              <ul className="gap-10 hidden sm:flex">
                <li>
                  <Link
                    className="text-xl font-bold link-hover hover:text-orange-600"
                    href="/team"
                  >
                    팀소개
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-bold link-hover hover:text-orange-600"
                    href="/meet"
                  >
                    문의방법
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-bold link-hover hover:text-orange-600"
                    href="/kotch"
                  >
                    강사진
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-xl font-bold link-hover hover:text-orange-600"
                    href="/price"
                  >
                    가격표
                  </Link>
                </li>
              </ul>
              <label className="ml-auto sm:hidden" htmlFor="drawer-toggle">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                </svg>
              </label>
            </Container>
          </header>
          {children}
        </div>
        <nav className="drawer-side z-50 overflow-hidden">
          <label className="drawer-overlay" htmlFor="drawer-toggle" />
          <ul className="flex flex-col items-center gap-5 bg-white h-full px-10 py-10">
            <li>
              <Link
                className="shrink-0 flex flex-col items-center gap-1"
                href="/"
              >
                <img src="/max_logo.png" alt="max-logo" className="w-10" />
                <h1 className="font-black text-orange-600 shrink-0">맥스팀</h1>
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-bold link-hover hover:text-orange-600"
                href="/team"
              >
                팀소개
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-bold link-hover hover:text-orange-600"
                href="/meet"
              >
                문의방법
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-bold link-hover hover:text-orange-600"
                href="/kotch"
              >
                강사진
              </Link>
            </li>
            <li>
              <Link
                className="text-xl font-bold link-hover hover:text-orange-600"
                href="/price"
              >
                가격표
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <a
        href="https://open.kakao.com/o/sErrvW3f"
        target="_blank"
        className="fixed right-5 bottom-5"
      >
        <span
          className="tooltip tooltip-left tooltip-warning"
          data-tip="카카오 오픈채팅 바로가기"
        >
          <img src="open_kakao.png" className="w-10 animate-bounce" />
        </span>
      </a>
      <footer className="flex-grow bg-gray-100 flex flex-col items-center justify-center pb-10">
        <figure className="w-32">
          <img src="max_logo_opacity.png" />
        </figure>
        <p className="text-xs">
          ⓒ Copyright 2024. TEAMMAX. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Layout;
