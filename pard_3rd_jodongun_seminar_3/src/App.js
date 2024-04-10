import './App.css';
import Header from './Header';
import SecondHeader from './SecondHeader';
import ThirdHeader from './ThirdHeader';
import FourthHeader from './FourthHeader';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header/>
      <SecondHeader/>
      <Routes>
        <Route path="/profile" element={<ThirdHeader/>}/>
        <Route path="/memberEdit" element={<FourthHeader/>} />
      </Routes>
    </div>
  );
}

export default App;
