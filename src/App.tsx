import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/user-login/LoginPage";
import RegistrationPage from "./components/user-login/RegistrationPage";
import Dashboard from "./components/dashboard";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>The Phishing Awareness Portal</p>
                </header>

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegistrationPage />} />
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
