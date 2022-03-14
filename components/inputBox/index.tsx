import styled, { useTheme } from "styled-components";
import { FaSearch } from "react-icons/fa";

const Wrapper = styled.div`
	width: 80%;
	max-width: 500px;
	height: auto;
	position: relative;
	margin: 0 auto;
`;

const Input = styled.input`
	width: 100%;
	padding: 13px 26px;
	box-sizing: border-box;
	border-radius: 9999px;
	outline: none;
	border: none;
	font-size: 18px;
	caret-color: #eeeeee;
	@media screen and (max-width: 500px) {
		font-size: 16px;
	}
`;

const Icon = styled(FaSearch)`
	width: 25px;
	height: 25px;
	position: absolute;
	top: 24%;
	right: 26px;

	@media screen and (max-width: 500px) {
		width: 20px;
		height: 20px;
	}
`;

type Props = {
	onChange: (e: any) => void;
	value: string;
};

export default function InputBox(props: Props) {
	const theme: any = useTheme();

	return (
		<Wrapper>
			<Input
				value={props.value}
				onChange={props.onChange}
				style={{ background: theme.color_1, color: theme.color_4 }}
				placeholder="지역구"
			></Input>
			<Icon style={{ color: theme.color_4 }} />
		</Wrapper>
	);
}
