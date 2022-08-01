import { ChangeEvent, useState } from "react";
import { Input } from "@mui/material";

import { useActions, useTypedSelector } from "../hooks";

const Converter = () => {
	const { fetchConvert } = useActions();
	const { result, isLoading, error } = useTypedSelector((state) => state.converter);

	const [inputValue, setInputValue] = useState("");

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;

		const [amount, from, , to] = value.split(" ");

		if (amount && from?.length >= 3 && to?.length >= 3) {
			fetchConvert({ from, to, amount: +amount });
		}

		setInputValue(value);
	};

	return (
		<div className="converter-wrapper">
			<h3>Enter the desired conversion</h3>

			<Input fullWidth value={inputValue} onChange={onChange} />

			{error && <p className="converter-error">{error}</p>}

			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div className="converter-result">
					{!error && result && (
						<div>
							Result: <span>{result}</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Converter;
