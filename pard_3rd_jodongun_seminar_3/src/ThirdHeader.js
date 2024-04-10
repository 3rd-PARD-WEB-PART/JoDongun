import './App.css';
import { Link } from 'react-router-dom';

function ThirdHeader() {
    return (
        <div className="third-whole">
            <div className="second-header-whole">
                <div className="third-header-menu">
                    <button className="third-header-button">모두 보기</button>
                    <button className="third-header-button">사진</button>
                    <button className="third-header-button">집들이</button>
                    <button className="third-header-button">노하우</button>
                    <button className="third-header-button">질문과답변</button>
                    <button className="third-header-button">스크랩북</button>
                    <button className="third-header-button">좋아요</button>
                </div>

            </div>
            <div className="profile-main">
                <div className="profile-main-left">
                    <div className="my-profile">
                        <div className="my-profile-upside">
                            <img className="main-profile-icon" src="./mainprofile.png" alt="mainProfile" />
                            <div className="profile-name">
                                조동운
                            </div>
                            <div className="profile-follow">
                                <div>
                                    팔로워 0
                                </div>
                                <div>
                                    팔로잉 0
                                </div>
                            </div>
                            <div>
                                <Link to="/memberEdit">
                                    <button className="setting-button">
                                        설정
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="my-profile-downside">
                            <div className="downside-button">
                                <div>
                                    <button className="my-profile-scrap" />
                                </div>
                                <div>
                                    <button className="my-profile-like" />
                                </div>
                                <div>
                                    <button className="my-profile-coupon" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="profile-main-right">
                    <div className="input-div">
                        <div className="input-text">
                            <div>
                                사진
                            </div>
                            <div className='input-text-number'>
                                0
                            </div>
                        </div>
                        <div className="input-file">
                            + 첫번째 사진을 올려보세요
                        </div>
                    </div>
                    <div className="input-div">
                        <div className="input-text">
                            <div>
                                집들이
                            </div>
                            <div className='input-text-number'>
                                0
                            </div>
                        </div>
                        <div className="input-file">
                            + 첫번째 집들이를 올려보세요
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdHeader;