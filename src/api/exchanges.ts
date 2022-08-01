import { api } from "./axios";

import { ConvertQuery, IConvert, ICurrency, ISymbolResponse } from "../models/exchanges";
import { BASE_CURRENCIES } from "../constants";

export const convertCurrency = async ({ to, from, amount }: ConvertQuery) => {
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

export const getSymbols = async () => {
	const { data } = await api.request<Promise<ISymbolResponse>>({
		method: "GET",
		url: "/symbols",
	});

	return data;
};

export const getCurrencies = async (base: string) => {
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
