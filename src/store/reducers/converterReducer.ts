import { ConverterAction, ConverterConstants, ConverterState } from "../types/converterType";

const initialState: ConverterState = {
	from: "",
	to: "",
	amount: 0,

	isLoading: false,
	error: null,
	result: null,
};

export const converterReducer = (state = initialState, action: ConverterAction): ConverterState => {
	switch (action.type) {
		case ConverterConstants.fetching:
			return { ...state, isLoading: true, error: "" };

		case ConverterConstants.success:
			return {
				...state,
				isLoading: false,
				error: "",
				// we can also do it but it's not the best way because is not obvious
				// ...action.payload
				result: action.payload.result,
				amount: action.payload.amount,
				from: action.payload.from,
				to: action.payload.to,
			};

		case ConverterConstants.error:
			return { ...state, isLoading: false, error: action.payload };

		default:
			return state;
	}
};
