import styled, { useTheme } from "styled-components";
import { memo } from "react";
import Content from "./content";

const Wrapper = styled.div`
	width: 80%;
	max-width: 500px;
	display: flex;
	margin: 0 auto;
	margin-bottom: 16px;
`;

type Props = {
	id: number;
	name: string;
	address: string;
	kakaoUrl: string;
	naverUrl: string;
	menu: string[];
};

function ListCard(props: Props) {
	const theme: any = useTheme();
	return (
		<Wrapper>
			<Content
				id={props.id}
				name={props.name}
				address={props.address}
				kakaoUrl={props.kakaoUrl}
				naverUrl={props.naverUrl}
				menu={props.menu}
			/>
		</Wrapper>
	);
}

export default memo(
	ListCard,
	(prevProps, nextProps) => prevProps.id === nextProps.id
);
