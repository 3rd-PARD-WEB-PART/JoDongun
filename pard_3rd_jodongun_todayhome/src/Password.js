import './App.css';

function Password(){
    return(
        <div className="form-email">
            비밀번호<br/>
            영문 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
            <input className="email-input" type="password" placeholder="비밀번호"/>
        </div>
    )
}

export default Password;