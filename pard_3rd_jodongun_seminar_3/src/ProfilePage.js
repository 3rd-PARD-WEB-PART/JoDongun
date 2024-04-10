import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import ThirdHeader from "./ThirdHeader";
import FourthHeader from "./FourthHeader";

function ProfilePage() {
    return (
        <div>
            <Header />
            <SecondHeader />
            <ThirdHeader/>
        </div>
    )
}

export default ProfilePage;