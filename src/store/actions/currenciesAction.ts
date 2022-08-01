import { AppDispatch } from "..";

import exchangesApi from "../../api/exchanges";

import { currenciesFetching, currenciesSuccess, symbolsSuccess } from "../slices/currenciesSlice";

import { convertCurrencyValue } from "../../utils";

export const fetchSymbols = () => {
	return async (dispatch: AppDispatch) => {
		dispatch(currenciesFetching());

		try {
			const { symbols } = await exchangesApi.getSymbols();

			// keys are symbols, values are name
			const payload = Object.keys(symbols);

			dispatch(symbolsSuccess(payload));
		} catch (error) {
			// @ts-ignore
			dispatch(currenciesError(error.response.data.error.message));
		}
	};
};

export const fetchCurrencies = (currency: string) => {
	return async (dispatch: AppDispatch) => {
		dispatch(currenciesFetching());

		try {
			const { rates } = await exchangesApi.getCurrencies(currency);

			const payload = Object.keys(rates).map((key) => ({
				key,
				value: convertCurrencyValue(rates[key]),
			}));

			dispatch(currenciesSuccess(payload));
		} catch (error) {
			// @ts-ignore
			dispatch(currenciesError(error.response.data.error.message));
		}
	};
};
