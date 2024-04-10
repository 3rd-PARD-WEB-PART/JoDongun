import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import ThirdHeader from "./ThirdHeader";
import FourthHeader from "./FourthHeader";

function MainPage() {
    return (
        <div>
            <Header />
            <SecondHeader />
            <ThirdHeader/>
            <Routes>
                <Route path="/memberEdit" element={<FourthHeader />} />
            </Routes>
        </div>
    )
}

export default MainPage;