import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import PropertiesContextProvider from "./context/propertiesContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<PropertiesContextProvider>
			<App />
		</PropertiesContextProvider>
	</BrowserRouter>
);
