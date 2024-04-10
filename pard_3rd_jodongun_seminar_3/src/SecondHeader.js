import './App.css';
import { Link } from 'react-router-dom';

function SecondHeader(props){
    return(
        <div className="second-header-whole">
            <div className="second-header-menu">
                <Link to="/profile">
                    <button className="second-header-button">프로필</button>
                </Link>
                <button className="second-header-button">나의 설정</button>
                <button className="second-header-button">나의 리뷰</button>
                <Link to="/memberEdit">
                    <button className="second-header-button">설정</button>
                </Link>
            </div>
        </div>
    )
}

export default SecondHeader;