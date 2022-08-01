export interface ConvertQuery {
	from: string;
	to: string;
	amount: number;
}

export interface Info {
	timestamp: number;
	rate: number;
}

export interface IConvert {
	success: boolean;
	query: ConvertQuery;
	info: Info;
	date: string;
	result: number;
}

export interface ISymbolResponse {
	success: boolean;
	symbols: ISymbol;
}

export interface ISymbol {
	[key: string]: number;
}

export interface ICurrency {
	base: string;
	date: string;
	rates: ISymbol;
	success: boolean;
	timestamp: number;
}
