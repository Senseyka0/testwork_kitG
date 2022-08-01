export enum ConverterConstants {
	fetching = "fetching",
	success = "success",
	error = "error",
}

export interface ConverterState {
	from: string;
	to: string;
	amount: number;
	isLoading: boolean;
	error: string | null;
	result: number | null;
}

interface FetchingAction {
	type: ConverterConstants.fetching;
}
interface SuccessAction {
	type: ConverterConstants.success;
	payload: { result: number; from: string; to: string; amount: number };
}
interface ErrorAction {
	type: ConverterConstants.error;
	payload: string;
}

export type ConverterAction = FetchingAction | SuccessAction | ErrorAction;
