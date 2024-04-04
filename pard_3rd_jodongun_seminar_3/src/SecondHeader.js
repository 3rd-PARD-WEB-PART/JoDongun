import './App.css';
import ThirdHeader from './ThirdHeader';

function SecondHeader(props){
    return(
        <div className="second-header-whole">
            <div className="second-header-menu">
                <button className="second-header-button">프로필</button>
                <button className="second-header-button">나의 설정</button>
                <button className="second-header-button">나의 리뷰</button>
                <button className="second-header-button">설정</button>
            </div>
        </div>
    )
}

export default SecondHeader;