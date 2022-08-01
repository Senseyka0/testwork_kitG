/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

import { useActions, useTypedSelector } from "../hooks";

import { DEFAULT_CURRENCY } from "../constants";

const Currencies = () => {
	const { symbols, currencies, isLoading, error } = useTypedSelector((state) => state.currencies);

	const { fetchSymbols, fetchCurrencies } = useActions();

	const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

	useEffect(() => {
		fetchSymbols();
	}, []);

	useEffect(() => {
		if (currency) {
			fetchCurrencies(currency);
		}
	}, [currency]);

	const onChange = (event: SelectChangeEvent) => {
		setCurrency(event.target.value);
	};

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : (
				<>
					<Select value={currency} onChange={onChange} fullWidth>
						{symbols.map((symbol) => (
							<MenuItem key={symbol} value={symbol}>
								{symbol}
							</MenuItem>
						))}
					</Select>

					{error && <p className="converter-error">{error}</p>}

					<div className="currencies-items">
						{currencies.map((currency) => (
							<div key={currency.key} className="currencies-item">
								<span>{currency.key}</span>: {currency.value}
							</div>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default Currencies;
