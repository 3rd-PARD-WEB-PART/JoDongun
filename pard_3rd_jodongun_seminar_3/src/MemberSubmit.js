import './App.css';
import { Link } from 'react-router-dom';

function MemberSubmit() {
    return (
        <div className="form-email">
            <Link to="/profile">
                <button type="submit" className="member-submit-button">
                    회원가입하기
                </button>
            </Link>
        </div>
    )
}

export default MemberSubmit;