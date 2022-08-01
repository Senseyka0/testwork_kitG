import { AppDispatch } from "..";
import { convertCurrency } from "../../api/exchanges";

import { ConvertQuery } from "../../models/exchanges";
import { ConverterConstants } from "../types/converterType";

export const fetchConvert = (payload: ConvertQuery) => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: ConverterConstants.fetching });

		try {
			const { result, query } = await convertCurrency(payload);

			dispatch({
				type: ConverterConstants.success,
				payload: { result, amount: query.amount, from: query.from, to: query.to },
			});
		} catch (error) {
			dispatch({
				type: ConverterConstants.error,
				// @ts-ignore
				payload: error.response.data.error.message,
			});
		}
	};
};
