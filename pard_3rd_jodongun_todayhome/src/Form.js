import './App.css';
import Email from './Email';
import Password from './Password';
import Checkpass from './Checkpass';
import Nickname from './Nickname';

function Form() {
    return(
        <div className="form-frame">
            <div className="form">
                <div className="font-20">
                    회원가입
                </div>
                <Email/>
                <Password/>
                <Checkpass/>
                <Nickname/>
                <div className="check-member">
                    이미 아이디가 있으신가요?
                    <a href="">로그인</a>
                </div>
            </div>
        </div>
    )
}

export default Form;