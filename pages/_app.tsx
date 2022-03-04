import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global-style";
import darkTheme from "../styles/dark-theme";
import { DefaultSeo } from "next-seo"

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>정용진 부회장의 전국맛집지도</title>
			</Head>
			<GlobalStyle />
			<ThemeProvider theme={darkTheme}>
				<DefaultSeo
					title={"정용진 부회장의 전국맛집지도"}
					description={"신세계 정용진 부회장이 선정한 전국 맛집을 알아보세요!"}
					
					openGraph={{
						type: 'website',
						locale: 'ko_KR',
						url: 'https://jyj-map.vercel.app',
						site_name: '정용진 전국맛집지도',
						title: '정용진 부회장의 전국맛집지도',
						description: '신세계 정용진 부회장이 선정한 전국 맛집을 알아보세요!',
						images: [{
							url: "https://raw.githubusercontent.com/ChoiYongWon/jyj-map/main/public/kakao.jpg",
							width: 800,
							height: 600,
							alt: "대표 이미지"
						}]
					}}
				/>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}
