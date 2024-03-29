import Title from "../../components/title_list";
import InputBox from "../../components/inputBox";
import ListCard from "../../components/listCard";
import { useEffect, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import listDataJson from "../../data/list.json";
import { useRouter } from "next/router";
import Category from "../../components/category";
import useThrottle from "../../hooks/useThrottle";

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
	const searchQuery = useThrottle(query);
	const [viewList, setViewList] = useState([]);
	const [categories, setCategories] = useState<string[]>([]);
	const listData = useRef(listDataJson);

	useEffect(() => {
		const state = router.query.state;
		// @ts-ignore
		const data = listData.current.data[state];
		const queries = searchQuery.split(" ").filter((str) => str);
		setViewList(
			data.filter((data: any) => {
				let count = 0;
				const queries = searchQuery.split(" ").filter((str) => str);
				for (let i = 0; i < queries.length; i++) {
					if (
						data.name.includes(queries[i]) ||
						data.address.includes(queries[i]) ||
						data.menu.filter((menu: any) => menu.includes(queries[i])).length >
							0
					) {
						count += 1;
					}
				}
				if (queries.length == count) {
					return true;
				} else {
					return false;
				}
			})
		);
	}, [searchQuery]);

	useEffect(() => {
		const tmp: any = {};

		viewList.forEach((data: any) => {
			const menu = data.menu;
			menu.forEach((menu: string) => (tmp[menu] = true));
		});

		setCategories(Object.keys(tmp));
	}, [viewList]);

	const onCategoryClick = (e: any) => {
		const menu = e.currentTarget.innerText;
		setQuery((state) => `${state} ${menu}`);
	};

	const queryOnChange = (e: any) => {
		setQuery(e.target.value);
	};

	return (
		<>
			<Title name={router.query.state as string} />
			<InputBox value={query} onChange={queryOnChange} />
			<Category categories={categories} onCategoryClick={onCategoryClick} />
			<ResultMessage style={{ color: theme.color_1 }}>
				검색결과 총 {viewList.length}개
			</ResultMessage>
			{viewList.map((data: any, i) => (
				<ListCard
					key={i}
					id={data.id}
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
