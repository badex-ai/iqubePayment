import "./App.css";
import ContactPage from "./pages/contactPage";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Routes>
				<Route path="/pay/*" element={<ContactPage />}></Route>
				<Route path="/" element={<Navigate to="/pay" />} />
			</Routes>
		</div>
	);
}

export default App;
