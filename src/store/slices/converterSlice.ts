import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import { ConverterState } from "../types/converterType";

const initialState: ConverterState = {
	from: "",
	to: "",
	amount: 0,

	isLoading: false,
	error: null,
	result: null,
};

const converterSlice = createSlice({
	name: "converter",
	initialState,
	reducers: {
		converterFetching: (state: ConverterState) => {
			state.isLoading = true;
			state.error = null;
		},

		converterError: (state: ConverterState, action: PayloadAction<string>) => {
			state.isLoading = false;
			state.error = action.payload;
		},

		currenciesSuccess: (
			state: ConverterState,
			action: PayloadAction<{ result: number; from: string; to: string; amount: number }>
		) => {
			state.isLoading = false;
			state.error = "";

			state.result = action.payload.result;
			state.amount = action.payload.amount;
			state.from = action.payload.from;
			state.to = action.payload.to;
		},
	},
});

export const { currenciesSuccess, converterError, converterFetching } = converterSlice.actions;

export default converterSlice.reducer;
