import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { CurrenciesState } from "../types/currenciesType";

const initialState: CurrenciesState = {
	symbols: [],
	currencies: [],

	isLoading: false,
	error: null,
};

const currenciesSlice = createSlice({
	name: "currencies",
	initialState,
	reducers: {
		currenciesFetching: (state: CurrenciesState) => {
			state.isLoading = true;
			state.error = null;
		},

		symbolsSuccess: (state: CurrenciesState, action: PayloadAction<string[]>) => {
			state.isLoading = false;
			state.error = "";
			state.symbols = action.payload;
		},

		currenciesSuccess: (
			state: CurrenciesState,
			action: PayloadAction<{ key: string; value: number }[]>
		) => {
			state.isLoading = false;
			state.error = "";
			state.currencies = action.payload;
		},

		currenciesError: (state: CurrenciesState, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
	},
});

export const { currenciesSuccess, currenciesError, currenciesFetching, symbolsSuccess } =
	currenciesSlice.actions;

export default currenciesSlice.reducer;
