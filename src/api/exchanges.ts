import { api } from "./axios";

import { ConvertQuery, IConvert, ICurrency, ISymbolResponse } from "../models/exchanges";

import { BASE_CURRENCIES } from "../constants";

const convertCurrency = async ({ to, from, amount }: ConvertQuery) => {
	const { data } = await api.request<Promise<IConvert>>({
		method: "GET",
		url: "/convert",
		params: {
			to,
			from,
			amount,
		},
	});

	return data;
};

const getSymbols = async () => {
	const { data } = await api.request<Promise<ISymbolResponse>>({
		method: "GET",
		url: "/symbols",
	});

	return data;
};

const getCurrencies = async (base: string) => {
	const { data } = await api.request<Promise<ICurrency>>({
		method: "GET",
		url: "/latest",
		params: {
			base,
			symbols: BASE_CURRENCIES.join(","),
		},
	});

	return data;
};

export default {
	convertCurrency,
	getSymbols,
	getCurrencies,
};
