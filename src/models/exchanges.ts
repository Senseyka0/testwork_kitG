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
