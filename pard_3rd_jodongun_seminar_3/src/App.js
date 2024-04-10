import './App.css';
import LoginPage from './LoginPage';
import ProfilePage from './ProfilePage';
import MemberEditPage from './MemberEditPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/memberEdit" element={<MemberEditPage/>} />
    </Routes>
  );
}

export default App;
