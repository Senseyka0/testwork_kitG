import axios from "axios";

export const api = axios.create({
	baseURL: "https://api.apilayer.com/exchangerates_data",
	headers: {
		apikey: "RHBqe6r491aUvyzpkAHrZVLuBhSP3Gkz",
	},
});
