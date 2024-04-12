import './App.css';
import { NavLink } from 'react-router-dom';

function SecondHeader(props) {
    const style = {
        color: '#35C5F0',
        width: '85px',
        height: '30px',
        backgroundcolor: 'transparent',
        border: 'none',
        font: 'inter',
        fontSize: '18px',
        fontWeight: '700',
        textDecoration: 'none',
    };

    const defaultStyle = {
        color: 'black',
        width: '85px',
        height: '30px',
        backgroundcolor: 'transparent',
        border: 'none',
        font: 'inter',
        fontSize: '18px',
        fontWeight: '700',
        textDecoration: 'none',
    }



    return (
        <div className="second-header-whole">
            <div className="second-header-menu">
                <NavLink to="/profile" style = {({isActive}) => (isActive ? style: defaultStyle)}>
                    프로필
                </NavLink>
                <button className="second-header-button">나의 설정</button>
                <button className="second-header-button">나의 리뷰</button>
                <NavLink to="/memberEdit" style = {({isActive}) => (isActive ? style: defaultStyle)}>
                    설정
                </NavLink> 

                {/* <NavLink to="/style" style = {({isActive}) => (isActive ? style: defaultStyle)}>
                    나의 설정
                </NavLink>
                <NavLink style = {({isActive}) => (isActive ? style: defaultStyle)}>
                    나의 리뷰
                </NavLink> */}
            </div>
        </div>
    )
}

export default SecondHeader;