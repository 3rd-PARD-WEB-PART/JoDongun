import './App.css';
import { NavLink } from 'react-router-dom';

function SecondHeader(props) {
    const style = {
        fontSize: 21,
    }

    return (
        <div className="second-header-whole">
            <div className="second-header-menu">
                <NavLink to="/">
                    <button className="second-header-button">프로필</button>
                </NavLink>
                <button className="second-header-button">나의 설정</button>
                <button className="second-header-button">나의 리뷰</button>
                <NavLink to="/memberEdit">
                    <button className="second-header-button">설정</button>
                </NavLink>
            </div>
        </div>
    )
}

export default SecondHeader;