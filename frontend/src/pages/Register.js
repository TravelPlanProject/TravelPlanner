function Register() {
  return (
    <div>
      <div>
        <div id="logo"></div>
        <p id="title">회원가입</p>
        <div>
          <form>
            <input id="userId" type="text" placeholder="아이디를 입력하세요" />
            <input id="userPw" type="password" placeholder="비밀번호를 입력하세요" />
            <input id="userPwc" type="password" placeholder="비밀번호를 한 번 더 입력하세요" />
            <input id="userEmail" placeholder="이메일을 입력하세요" />
            <button>회원가입</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
