import { relative } from "path/posix";
import styled, { useTheme } from "styled-components";

const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 8px 0;
	display: flex;
	flex-wrap: wrap;
	box-sizing: border-box;
`;

const Menu = styled.div`
	border-radius: 99px;
	padding: 6px 20px;
	margin-right: 6px;
	margin-bottom: 6px;
	font-size: 14px;
	cursor: pointer;
`;

const Toggle = styled.details`
	width: 80%;
	max-width: 500px;
	margin: 0 auto;
	padding: 16px 0 0;
	box-sizing: border-box;
	text-align: end;
	outline: none;
`;

const ToggleTitle = styled.summary`
	font-size: 14px;
	cursor: pointer;
	font-weight: bold;
	padding: 0 0 12px;
	outline: none;
`;

type Props = {
	categories: any;
	onCategoryClick: (e: any) => void;
};

export default function Category(props: Props) {
	const theme: any = useTheme();

	return (
		<Toggle>
			<ToggleTitle style={{ color: theme.color_2 }}>
				실시간 카테고리
			</ToggleTitle>
			<Wrapper>
				{props.categories.map((data: any, i: any) => (
					<Menu
						key={i}
						style={{ background: theme.color_2, color: theme.color_4 }}
						onClick={props.onCategoryClick}
					>
						{data}
					</Menu>
				))}
			</Wrapper>
		</Toggle>
	);
}
