import styles from '../styles/Register.module.css';

function Register() {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.logo}></div>
        <p className={styles.title}>회원가입</p>
        <div className={styles.form}>
          <form>
            <div className={styles.id_box}>
              <input className={styles.input_id} id="userId" type="text" placeholder="아이디를 입력하세요" />
            </div>
            <div className={styles.pw_box}>
              <input className={styles.input_pw} id="userPw" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div className={styles.pwc_box}>
              <input
                className={styles.input_pwc}
                id="userPwc"
                type="password"
                placeholder="비밀번호를 한 번 더 입력하세요"
              />
            </div>
            <div className={styles.email_box}>
              <input className={styles.input_email} id="userEmail" placeholder="이메일을 입력하세요" />
            </div>
            <div>
              <button className={styles.submitBtn}>회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
