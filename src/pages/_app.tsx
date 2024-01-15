import "@/styles/globals.css";
import "@/styles/font/style.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode, Fragment } from "react";
import Layout from "@/components/layout";

type Page = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};

type AppPropsWithLayout = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <Layout>{getLayout(<Component {...pageProps} />)}</Layout>;
}
