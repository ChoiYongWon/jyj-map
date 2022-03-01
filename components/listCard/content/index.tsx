import styled, { useTheme } from "styled-components";
import Naver from "../../../public/naver.jpg";
import Kakao from "../../../public/kakao.jpg";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

const LeftWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 85%;
	height: auto;
	padding: 30px 30px;
	border-radius: 20px;
	box-sizing: border-box;

	@media screen and (max-width: 500px) {
		padding: 22px 30px;
	}
`;

const RightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	flex-basis: 15%;
	padding-left: 8px;
	box-sizing: border-box;
	min-width: 58px;
`;

const MapButton = styled(Image)`
	border-radius: 999px;
	cursor: pointer;
`;

const Name = styled.span`
	font-size: 20px;
	font-weight: bold;
	line-height: 1.2;
`;

const Address = styled.span`
	opacity: 0.8;
	font-size: 14px;
	line-height: 1.4;
`;

const MenuWrapper = styled.div`
	display: flex;
	margin-top: 22px;
	flex-wrap: wrap;
	width: 100%;
`;

const Menu = styled.div`
	border-radius: 99px;
	padding: 6px 20px;
	margin-right: 6px;
	margin-bottom: 6px;
	font-size: 14px;
`;

type Props = {
	name: string;
	address: string;
	kakaoUrl: string;
	naverUrl: string;
	menu: string[];
};

function Content(props: Props) {
	const theme: any = useTheme();

	return (
		<>
			<LeftWrapper style={{ background: theme.color_1 }}>
				<Name style={{ color: theme.color_3 }}>{props.name}</Name>
				<Address style={{ color: theme.color_4, marginTop: "8px" }}>
					{props.address}
				</Address>
				<MenuWrapper>
					{props.menu.map((data, i) => (
						<Menu
							key={i}
							style={{ background: theme.color_2, color: theme.color_4 }}
						>
							{data}
						</Menu>
					))}
				</MenuWrapper>
			</LeftWrapper>
			<RightWrapper>
				{props.kakaoUrl ? (
					<Link href={props.kakaoUrl}>
						<a>
							<MapButton src={Kakao} width={"50px"} height={"50px"}></MapButton>
						</a>
					</Link>
				) : (
					<></>
				)}
				{props.naverUrl ? (
					<Link href={props.naverUrl}>
						<a>
							<MapButton src={Naver} width={"50px"} height={"50px"}></MapButton>
						</a>
					</Link>
				) : (
					<></>
				)}
			</RightWrapper>
		</>
	);
}

export default memo(Content, () => true);
