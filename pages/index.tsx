import Layout from "../components/layout";
import MapContainer from "../containers/map/MapContainer";
import Title from "../components/title_home";
import Script from "next/script";

export default function Home({ children }: any) {
	return (
		<>
			<Layout>
				<Title />
				<MapContainer></MapContainer>
				{/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=G-1H07HTR0RK"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-1H07HTR0RK');
                `}
				</Script>
			</Layout>
		</>
	);
}
