import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.apilayer.com/exchangerates_data",
	headers: {
		apikey: "k99CoaNNvFZo2DtVtDn2RlJcCvxazpyd",
	},
});
