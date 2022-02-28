import styled, { useTheme, keyframes } from "styled-components";
import { useCountUp } from "react-countup";
import { useEffect, useRef } from "react";

const Wrapper = styled.g`
	cursor: pointer;
	transition: transform ease 0.5s;
`;
type CardProps = {
	background: string;
};

const Card = styled.rect`
	transform-origin: center;
`;

const Name = styled.text`
	font-size: 17px;
`;

const Count = styled.text`
	font-size: 28px;
	font-weight: bold;
`;

type Props = {
	name: string;
	count: number;
	coord: number[];
	onClick: () => void;
};

export default function Indicator(props: Props) {
	const theme: any = useTheme();
	const countUpRef = useRef(null);
	const { start, pauseResume, reset, update } = useCountUp({
		end: props.count,
		duration: 2,
		useEasing: true,
		ref: countUpRef,
	});

	useEffect(() => {
		start();
	}, []);

	return (
		<Wrapper
			onClick={props.onClick}
			transform={`translate(${props.coord[0]},${props.coord[1]}) scale(1.1)`}
		>
			<Card
				x="0"
				y="0"
				width="100"
				height="80"
				rx="10"
				ry="10"
				fill={theme.indicator}
			/>
			<Name x="50" y="30" textAnchor="middle" fill={theme.color_4}>
				{props.name}
			</Name>
			<Count
				x="50"
				y="60"
				textAnchor="middle"
				fill={theme.color_3}
				ref={countUpRef}
			></Count>

			<svg x="0" y="0" width="100" height="80"></svg>
		</Wrapper>
	);
}
