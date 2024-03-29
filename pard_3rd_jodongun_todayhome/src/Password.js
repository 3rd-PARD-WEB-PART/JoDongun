import './App.css';

function Password(){
    return(
        <div className="form-email">
                <div className="form-font">비밀번호</div>
                <div className="form-font">영문 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</div>
            <input className="email-input" type="password" placeholder="비밀번호"/>
        </div>
    )
}

export default Password;