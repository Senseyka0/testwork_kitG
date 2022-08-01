import { AppDispatch } from "..";

import exchangesApi from "../../api/exchanges";

import { currenciesSuccess, converterError, converterFetching } from "../slices/converterSlice";

import { ConvertQuery } from "../../models/exchanges";

import { convertCurrencyValue } from "../../utils";

export const fetchConvert = (payload: ConvertQuery) => {
	return async (dispatch: AppDispatch) => {
		dispatch(converterFetching());

		try {
			const { result, query } = await exchangesApi.convertCurrency(payload);

			dispatch(
				currenciesSuccess({
					result: convertCurrencyValue(result),
					amount: query.amount,
					from: query.from,
					to: query.to,
				})
			);
		} catch (error) {
			// @ts-ignore
			dispatch(converterError(error.response.data.error.message));
		}
	};
};
