export interface CurrenciesState {
	isLoading: boolean;
	error: string | null;
	symbols: string[];
	currencies: { key: string; value: number }[];
}
