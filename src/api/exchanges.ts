import { api } from "./axios";

import { ConvertQuery, IConvert } from "../models/exchanges";

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
