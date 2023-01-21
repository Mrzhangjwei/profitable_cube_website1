import { AppProps } from "next/app";
import { ReactElement, useState } from "react";
import { Noto_Sans_TC } from "@next/font/google";
import { AdsenseContext } from "@ads/adsense";
import Script from "next/script";

import "nextra-theme-docs/style.css";
import "react-tooltip/dist/react-tooltip.css";
import "../styles/global.css";

export const noto = Noto_Sans_TC({
    weight: ["500", "700"],
    variable: "--font-noto",
    display: "swap",
    subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps): ReactElement {
    //this will cause the whole page being rerendered
    //TODO: replace with global states using libraries
    const [status, setAdsStatus] = useState<"ok" | "error">("ok");

    return (
        <>
            <Script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1801171681307308"
                crossOrigin="anonymous"
                onError={() => setAdsStatus("error")}
            />
            <style jsx global>{`
                html {
                    --font-noto: ${noto.style.fontFamily};
                }
            `}</style>
            <AdsenseContext.Provider
                value={{
                    status,
                }}
            >
                <Component {...pageProps} />
            </AdsenseContext.Provider>
        </>
    );
}