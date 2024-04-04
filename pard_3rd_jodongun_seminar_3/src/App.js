import './App.css';
import Header from './Header';
import SecondHeader from './SecondHeader';
import ThirdHeader from './ThirdHeader';
import {useState, useEffect} from "react";

function App() {
  const content = "";

  return (
    <div>
      <Header/>
      <SecondHeader/>
      <ThirdHeader/>
    </div>
  );
}

export default App;
