import type { AppProps } from "next/app"
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import darkTheme from "../styles/dark-theme"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <> 
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>정용진 회장의 맛집 리스트</title>
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={darkTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
  }