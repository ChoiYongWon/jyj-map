import { useEffect, useState } from "react";

const DEFAULT_DELAY = 150;

export default (value: string, delay = DEFAULT_DELAY) => {
	const [debouncedValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value);
		}, delay);
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]);

	return debouncedValue;
};
