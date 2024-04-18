import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import RegistrationPage from "./components/user-login/RegistrationPage";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>The Phishing Awareness Portal</p>
                </header>

                <Routes>
                    <Route path="/register" element={<RegistrationPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
