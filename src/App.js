import "bootstrap/dist/css/bootstrap.min.css";
import { Socialicons } from "./components/socialIcons";
import Headermain from "./components/header";
import "./App.css";

function App() {
	return (
		<div className="profile-app">
			<Headermain />
			<Socialicons />
		</div>
	);
}

export default App;
