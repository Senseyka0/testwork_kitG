import { AppDispatch } from "..";

import { getCurrencies, getSymbols } from "../../api/exchanges";
import { convertCurrencyValue } from "../../utils";

import { CurrenciesConstants } from "../types/currenciesType";

export const fetchSymbols = () => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: CurrenciesConstants.fetching });

		try {
			const { symbols } = await getSymbols();

			// keys are symbols, values are name
			const payload = Object.keys(symbols);

			dispatch({
				type: CurrenciesConstants.symbolsSuccess,
				payload,
			});
		} catch (error) {
			dispatch({
				type: CurrenciesConstants.error,
				// @ts-ignore
				payload: error.response.data.error.message,
			});
		}
	};
};

export const fetchCurrencies = (currency: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch({ type: CurrenciesConstants.fetching });

		try {
			const { rates } = await getCurrencies(currency);

			const payload = Object.keys(rates).map((key) => ({
				key,
				value: convertCurrencyValue(rates[key]),
			}));

			dispatch({
				type: CurrenciesConstants.currenciesSuccess,
				payload,
			});
		} catch (error) {
			dispatch({
				type: CurrenciesConstants.error,
				// @ts-ignore
				payload: error.response.data.error.message,
			});
		}
	};
};
