import '../styles/Register.css';

function Register() {
  return (
    <div>
      <div className="wrap">
        <div className="logo"></div>
        <p className="title">회원가입</p>
        <div className="form">
          <form>
            <div className="id_box">
              <input className="input_id" id="userId" type="text" placeholder="아이디를 입력하세요" />
            </div>
            <div className="pw_box">
              <input className="input_pw" id="userPw" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className="pwc_box">
              <input className="input_pwc" id="userPwc" type="password" placeholder="비밀번호를 한 번 더 입력하세요" />
            </div>
            <div className="email_box">
              <input className="input_email" id="userEmail" placeholder="이메일을 입력하세요" />
            </div>
            <div className="Btn_box">
              <button>회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
