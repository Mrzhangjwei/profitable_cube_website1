import { Noto_Sans_TC } from "next/font/google";
import { AdsProvider } from "@/adsense";
import type { ReactNode } from "react";

import { NextDocsProvider } from "./next-docs-provider";
import Footer from "@/components/Footer";
import { footer, urlBase } from "@config";
import type { Metadata } from "next";

import "./global.css";

const noto = Noto_Sans_TC({
  weight: "400",
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "盈利模方 - %s",
    default: "盈利模方 - 您必备的智能投资工具",
  },
  description:
    "YEE式機器龍的指令及使用教學，透過簡單的一鍵式指令以及中文介面的音樂功能快速建立好和朋友玩耍的優質空間",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    images: "/opengraph-image.png",
    title: {
      template: "Yeecord - %s",
      default: "Yeecord - 萬中選一的 Discord 機器人",
    },
    description:
      "YEE式機器龍的指令及使用教學，透過簡單的一鍵式指令以及中文介面的音樂功能快速建立好和朋友玩耍的優質空間",
  },
  metadataBase: urlBase,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" className={noto.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <AdsProvider>
          <NextDocsProvider>
            {children}
            <Footer categories={footer} />
          </NextDocsProvider>
        </AdsProvider>
      </body>
    </html>
  );
}
