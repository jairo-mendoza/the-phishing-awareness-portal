import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import { Register } from './features/user-auth/routes/Register';
import { Login } from './features/user-auth/routes/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Training } from './features/interactive-training/routes/Training';

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <Router>
                <div className="App">
                    <header className="App-header">
                        <p>The Phishing Awareness Portal</p>
                    </header>

                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />

                        <Route path="training" element={<Training />} />
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
