import Register from './Register';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
function Login() {
  return (
    <div>
      <div id="wrap">
        <div className="logo"></div>
        <div className="title">로그인</div>
        <div className="form">
          <form>
            <div className="id_box">
              <input id="userId" className="input_id" placeholder="아이디를 입력해주세요" />
            </div>
            <div className="pw_box">
              <input type="password" id="userPw" className="input_pw" placeholder="비밀번호를 입력해주세요" />
            </div>
            <div className="Btn_box">
              <button id="submitBtn" className="submitBtn">
                로그인
              </button>
            </div>
          </form>

          <div className="Register">
            <Link to="/Register" element={<Register />}>
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
