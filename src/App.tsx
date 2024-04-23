import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/dashboard";
import { Register } from "./features/user-auth/routes/Register";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <p>The Phishing Awareness Portal</p>
                </header>

                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
