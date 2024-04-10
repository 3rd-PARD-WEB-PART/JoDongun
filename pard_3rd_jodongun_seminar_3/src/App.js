import './App.css';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<MainPage />} />
    </Routes>
  );
}

export default App;
