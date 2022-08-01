import { useState } from "react";
import { Select, SelectChangeEvent } from "@mui/material";

const Currencies = () => {
	const [currency, setCurrency] = useState("UAH");

	const onChange = (event: SelectChangeEvent) => {
		setCurrency(event.target.value as string);
	};

	return (
		<div className="currencies-wrapper">
			<Select value={currency} onChange={onChange} />
		</div>
	);
};

export default Currencies;
