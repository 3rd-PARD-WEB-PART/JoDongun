import './App.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className="header-whole">
            <div className="header-menubar">
                <div className="header-menubar-left">
                    <Link to="/">
                        <img src="./Header_1.png" alt="로고"/>
                    </Link>
                    <button className="header-menubar-left-button">커뮤니티</button>
                    <button className="header-menubar-left-button">쇼핑</button>
                    <button className="header-menubar-left-button">인테리어/생활</button>
                </div>
                <div className="header-menubar-right">
                    <input className="header-menubar-right-input" type="text" placeholder="통합검색"/>
                    <div className="mini-icon">
                        <img className="heder-image" src="./scrap.png" alt="로고"/>
                        <img className="heder-image" src="./notice.png" alt="로고"/>
                        <img className="heder-image" src="./basket.png" alt="로고"/>
                        <img src="./myprofile.png" alt="로고"/>
                    </div>
                    <button className="header-menubar-right-button">글쓰기</button>
                </div>
            </div>
        </div>
    )
}

export default Header;