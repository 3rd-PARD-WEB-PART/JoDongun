import './App.css';
import Email from './Email';

function Form() {
    return(
        <div className="form-frame">
            <div className="form">
                회원가입
                <Email/>
            </div>
        </div>
    )
}

export default Form;