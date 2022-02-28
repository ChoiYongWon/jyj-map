import Title from "../../components/title_list";
import InputBox from "../../components/inputBox";
import ListCard from "../../components/listCard";
import { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import listData from "../../data/list.json";
import { useRouter } from "next/router";

const ResultMessage = styled.div`
	margin: 30px auto 8px;
	font-size: 14px;
	width: 80%;
	max-width: 500px;
	font-weight: bold;
`;

export default function ListContainer(props: any) {
	const router = useRouter();
	const theme: any = useTheme();
	const [query, setQuery] = useState("");
	const [viewList, setViewList] = useState([]);

	useEffect(() => {
		const state = router.query.state;
		// @ts-ignore
		const data = listData.data[state];
		setViewList(
			data.filter(
				(data: any) =>
					data.name.includes(query) ||
					data.address.includes(query) ||
					data.menu.filter((menu: any) => menu.includes(query)).length > 0
			)
		);
	}, [query]);

	const queryOnChange = (e: any) => {
		setQuery(e.target.value);
	};

	return (
		<>
			<Title name={router.query.state as string}></Title>
			<InputBox onChange={queryOnChange}></InputBox>
			<ResultMessage style={{ color: theme.color_1 }}>
				검색결과 총 {viewList.length}개
			</ResultMessage>
			{viewList.map((data: any, i) => (
				<ListCard
					key={i}
					name={data.name}
					address={data.address}
					kakaoUrl={data.kakaoUrl}
					naverUrl={data.naverUrl}
					menu={data.menu}
				/>
			))}
		</>
	);
}
