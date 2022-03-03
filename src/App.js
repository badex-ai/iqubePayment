import "./App.css";
import ContactPage from "./pages/contactPage";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header"></header>
			<Routes>
				<Route path="/pay/*" element={<ContactPage />}></Route>
			</Routes>
		</div>
	);
}

export default App;
