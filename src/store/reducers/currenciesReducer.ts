import { CurrenciesAction, CurrenciesConstants, CurrenciesState } from "../types/currenciesType";

const initialState: CurrenciesState = {
	symbols: [],
	currencies: [],

	isLoading: false,
	error: null,
};

export const currenciesReducer = (
	state = initialState,
	action: CurrenciesAction
): CurrenciesState => {
	switch (action.type) {
		case CurrenciesConstants.fetching:
			return { ...state, isLoading: true, error: "" };

		case CurrenciesConstants.symbolsSuccess:
			return {
				...state,
				isLoading: false,
				error: "",
				symbols: action.payload,
			};

		case CurrenciesConstants.currenciesSuccess:
			return {
				...state,
				isLoading: false,
				error: "",
				currencies: action.payload,
			};

		case CurrenciesConstants.error:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};
