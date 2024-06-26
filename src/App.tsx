import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboard';
import { Register } from './features/user-auth/routes/Register';
import { Login } from './features/user-auth/routes/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Training } from './features/interactive-training/routes/Training';
import { Forum } from './features/forum/routes/Forum';
import { PostForm } from './features/forum/routes/PostForm';
import { createGlobalStyle } from 'styled-components';
import { ForumPost } from './features/forum/components/ForumPost';

const GlobalStyle = createGlobalStyle`
    :root {
        --tag-border-radius: 15px;
    }
`;

function App() {
    return (
        <QueryClientProvider client={new QueryClient()}>
            <GlobalStyle />
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />

                        {/* Features */}
                        <Route path="/" element={<Dashboard />} />
                        <Route path="training" element={<Training />} />
                        <Route path="forum" element={<Forum />} />
                        <Route path="create-post" element={<PostForm />} />
                        <Route path="post/:id" element={<ForumPost />} />
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
