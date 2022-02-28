import {
	Busan,
	Chungbuk,
	Chungnam,
	Daegu,
	Daejeon,
	Gangwon,
	Gwangju,
	Gyeongbuk,
	Gyeonggi,
	Gyeongnam,
	Incheon,
	Jeju,
	Jeonbuk,
	Jeonnam,
	Sejong,
	Seoul,
	Ulsan,
} from "../../components/map";
import Indicator from "../../components/indicator";
import styled, { useTheme } from "styled-components";
import indicatorData from "../../data/indicator.json";
import listData from "../../data/list.json";
import { useRouter } from "next/router";

type MapProps = {
	map: string;
	background: string;
};

const Korea = styled.g`
	& > polyline,
	path {
		fill: ${(props: MapProps) => props.map};
		fill-opacity: 1;
		stroke: ${(props: MapProps) => props.background};
		stroke-opacity: 1;
		stroke-width: 2;
		transition: fill 0.2s ease;
		cursor: pointer;
	}

	// & > polyline:hover, & > path:hover{
	//     fill:blue;
	// }
`;

export default function MapContainer({ children }: any) {
	const theme: any = useTheme();
	const router = useRouter();

	return (
		<>
			<svg width="100%" height="85%" viewBox="0 0 800 1200">
				<Korea map={theme.color_1} background={theme.color_4}>
					<Seoul></Seoul>
					<Daegu></Daegu>
					<Sejong></Sejong>
					<Busan></Busan>
					<Chungbuk></Chungbuk>
					<Chungnam></Chungnam>
					<Daejeon></Daejeon>
					<Gangwon></Gangwon>
					<Gyeongbuk></Gyeongbuk>
					<Gyeonggi></Gyeonggi>
					<Gyeongnam></Gyeongnam>
					<Incheon></Incheon>
					<Jeju></Jeju>
					<Jeonbuk></Jeonbuk>
					<Jeonnam></Jeonnam>
					<Ulsan></Ulsan>
					<Gwangju></Gwangju>
				</Korea>

				{indicatorData.data.map((data, i) => {
					// @ts-ignore
					const list: listType = listData;
					const count = list.data[data.name].length;

					return (
						<Indicator
							onClick={() => router.push(`list/${data.name}`)}
							key={i}
							name={data.name}
							count={count}
							coord={[data.coord[0], data.coord[1]]}
						></Indicator>
					);
				})}
			</svg>
		</>
	);
}
