import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Contact from "./pages/Contact";
import ContactSubmitted from "./pages/ContactSubmitted";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Contact />} />
				<Route path="/submitted" element={<ContactSubmitted />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}


export const Footer = () => {
	return (
		<footer className="footer">
			<span>&copy; 2022 All rights reserved.</span>
			<span>Designed & Developed by
				<Link to="#"> Sleed</Link>
			</span>
			<div className="terms">
				<Link to="#">Terms of Use</Link>
				<span className="divider"></span>
				<Link to="#">Privacy</Link>
			</div>
		</footer>
	)
}



export default App;
