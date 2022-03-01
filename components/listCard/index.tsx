import styled, { useTheme } from "styled-components";
import { memo } from "react";
import Content from "./content";

type MenuProps = {
	isView: boolean;
};

const Wrapper = styled.div`
	position: ${(props: MenuProps) => (props.isView ? `relative` : `absolute`)};
	visibility: ${(props: MenuProps) => (props.isView ? `visible` : `hidden`)};
	pointer-events: ${(props: MenuProps) => (props.isView ? `all` : `none`)};
	width: 80%;
	max-width: 500px;
	display: flex;
	margin: 0 auto;
	margin-bottom: 16px;
`;

type Props = {
	name: string;
	address: string;
	kakaoUrl: string;
	naverUrl: string;
	menu: string[];
	isView: boolean;
};

function ListCard(props: Props) {
	const theme: any = useTheme();
	return (
		<Wrapper isView={props.isView}>
			<Content
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
	(prevProps, nextProps) =>
		prevProps.isView === nextProps.isView && prevProps.name === nextProps.name
);
