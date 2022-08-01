import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../constants/routes";

import { ContentLayout } from "../layouts";
import { Converter, Currencies } from "../pages";
import { Header } from "./";

const App = () => {
	return (
		<>
			<Header />

			<ContentLayout>
				<Routes>
					<Route path={ROUTES.CONVERTER} element={<Converter />} />
					<Route path={ROUTES.CURRENCIES} element={<Currencies />} />
				</Routes>
			</ContentLayout>
		</>
	);
};

export default App;
