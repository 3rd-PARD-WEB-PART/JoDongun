import './App.css';

function Header(){
    return(
        <div className="header-whole">
            <div className="header-menubar">
                <div className="header-menubar-left">
                    <img src="./Header_1.png" alt="로고"/>
                    <button className="header-menubar-left-button">커뮤니티</button>
                    <button className="header-menubar-left-button">쇼핑</button>
                    <button className="header-menubar-left-button">인테리어/생활</button>
                </div>
                <div className="header-menubar-right">
                    <input className="header-menubar-right-input" type="text"/>
                    <div className="mini-icon">
                        <img src="./scrap.png" alt="로고"/>
                        <img src="./notice.png" alt="로고"/>
                        <img src="./basket.png" alt="로고"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;