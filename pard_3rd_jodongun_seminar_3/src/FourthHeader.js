function FourthHeader() {
    return (
        <div className="forth-whole">
            <div className="second-header-whole">
                <div className="fourth-header-menu">
                    <button className="fourth-header-button">회원정보수정</button>
                    <button className="fourth-header-button">알림 설정</button>
                    <button className="fourth-header-button">사용자 숨기기 설정</button>
                    <button className="fourth-header-button">전문가 신청</button>
                    <button className="fourth-header-button">비밀번호 변경</button>
                    <button className="fourth-header-button">추천코드</button>
                </div>
            </div>
            <div className="member-edit">
                <div className="member-edit-left">
                    <div className="member-edit-header">
                        회원정보수정
                    </div>
                    <div className="member-edit-email">
                        <div className="email-text">
                            <div>
                                이메일
                            </div>
                            <div className="email-info">
                                *필수항목
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                                <input className="email-inputtag" />
                            </div>
                            <div className="text">
                                @
                            </div>
                            <div>
                                <input className="email-inputtag" />
                            </div>
                        </div>
                    </div>
                    <div className="member-edit-email">
                        <div className="email-text">
                            <div>
                                별명
                            </div>
                            <div className="email-info">
                                *필수항목
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                                <input className="nickname-inputtag" />
                            </div>
                        </div>
                    </div>
                    <div className="member-edit-email">
                        <div className="email-text">
                            <div>
                                홈페이지
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                                <input className="nickname-inputtag" />
                            </div>
                        </div>
                    </div>
                    <div className="member-edit-email">
                        <div className="email-text">
                            <div>
                                성별
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="member-edit-email">
                        <div className="email-text">
                            <div>
                                생년월일
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                                <input className="nickname-inputtag" />
                            </div>
                        </div>
                    </div>
                    <div className="member-edit-email">
                        <div className="profile-text">
                            <div>
                                프로필 이미지
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                                <img src="profileimg.png" alt="프로필 이미지"/>
                            </div>
                        </div>
                    </div>
                    <div className="member-edit-email">
                        <div className="email-text">
                            <div>
                                한줄소개
                            </div>
                        </div>
                        <div className="memver-edit-email-input">
                            <div>
                                <input className="nickname-inputtag" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthHeader;

