import './App.css';

function Nickname(){
    return(
        <div className="form-email">
            <div className="form-font">닉네임</div>
            <div className="form-font">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</div>
            <input className="email-input" type="text" placeholder="별명 (2~15자)"/>
        </div>
    )
}

export default Nickname;