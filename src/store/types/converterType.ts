export interface ConverterState {
	from: string;
	to: string;
	amount: number;
	isLoading: boolean;
	error: string | null;
	result: number | null;
}
