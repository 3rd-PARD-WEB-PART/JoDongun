import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return(
    <div>
      Home 입니다
      <Link to="/member">Member</Link>
    </div>
  )
}

export default Home;