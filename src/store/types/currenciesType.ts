export enum CurrenciesConstants {
	fetching = "currencies fetching",
	symbolsSuccess = "currencies symbols success",
	currenciesSuccess = "currencies success",
	error = "currencies error",
}

export interface CurrenciesState {
	isLoading: boolean;
	error: string | null;
	symbols: string[];
	currencies: { key: string; value: number }[];
}

interface FetchingAction {
	type: CurrenciesConstants.fetching;
}
interface SuccessSymbolsAction {
	type: CurrenciesConstants.symbolsSuccess;
	payload: string[];
}
interface SuccessCurrenciesAction {
	type: CurrenciesConstants.currenciesSuccess;
	payload: { key: string; value: number }[];
}
interface ErrorAction {
	type: CurrenciesConstants.error;
	payload: string;
}

export type CurrenciesAction =
	| FetchingAction
	| SuccessCurrenciesAction
	| ErrorAction
	| SuccessSymbolsAction;
