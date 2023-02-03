import Register from './Register';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';
function Login() {
  return (
    <div>
      <div className={styles.wrap}>
        <div className={styles.logo}></div>
        <div className={styles.title}>로그인</div>
        <div className={styles.form}>
          <form>
            <div className={styles.id_box}>
              <input id="userId" className={styles.input_id} placeholder="아이디를 입력해주세요" />
            </div>
            <div className={styles.pw_box}>
              <input type="password" id="userPw" className={styles.input_pw} placeholder="비밀번호를 입력해주세요" />
            </div>
            <div className={styles.Btn_box}>
              <button id="submitBtn" className={styles.submitBtn}>
                로그인
              </button>
            </div>
          </form>

          <div className={styles.Register}>
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
