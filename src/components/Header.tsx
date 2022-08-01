import { AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

import { ROUTES } from "../constants/routes";

const Header = () => (
	<AppBar component="nav">
		<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
			<h3>KitG</h3>

			<div>
				<Link className="header-link" to={ROUTES.CONVERTER}>
					Converter
				</Link>
				<Link className="header-link" to={ROUTES.CURRENCIES}>
					Currencies
				</Link>
			</div>
		</Toolbar>
	</AppBar>
);

export default Header;
