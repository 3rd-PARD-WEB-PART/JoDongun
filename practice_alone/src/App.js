import './App.css';
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import Member from './Member';

function App() {
  return (
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/member" element ={<Member/>}/>
      </Routes>
  );
}


export default App;
