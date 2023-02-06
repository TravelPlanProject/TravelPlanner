import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import userIcon from "../images/user.png";
import exTimeBlock from "../images/timeblock.png";
import kyunghwa from "../images/KH.png";
import busan from "../images/BS.png";
import dalaeng from "../images/DL.png";
import kkotji from "../images/KJ.png";
import sungsan from "../images/SS.png";

function Home() {
  return (
    <div>
      {/* 상단바 */}
      <div className={styles.header}>
        <div className={styles.goMain}>
          <Link to="/" className={styles.Main}>
            ABC
          </Link>
        </div>
        <div className={styles.goRoulette}>
          <Link to="/" className={styles.Roulette}>
            Roulette
          </Link>
        </div>
        <div className={styles.goRecord}>
          <Link to="/" className={styles.Record}>
            Record
          </Link>
        </div>
        <div className={styles.goRegister}>
          <Link to="/" className={styles.Register}>
            Register
          </Link>
        </div>
        <div className={styles.goUser}>
          <Link to="/">
            <img className={styles.user} alt="user" src={userIcon} />
          </Link>
        </div>
      </div>

      {/* 메인화면 */}
      <div className={styles.mainScreen}>
        <div>
          <img className={styles.timeblockExample} src={exTimeBlock} />
        </div>
        <div className={styles.textFrame1}>
          <div className={styles.textFrame2}>
            <div className={styles.comment}>
              당신의 여행을 기록해보세요! Record Your Trip!
            </div>
          </div>
        </div>
      </div>

      {/* 국내베스트5 */}
      <div className={styles.bestGoing}>
        <div className={styles.bestGoingComment}>국내베스트 5</div>
        <div className={styles.bestGoingFrame}>
          <div className={styles.kyunghwaPngFrame}>
            <img src={kyunghwa} className={styles.kyunghwaPng} />
            <div className={styles.kyunghwaComment1}>진해 경화역</div>
            <div className={styles.kyunghwaDetail}></div>
            <div className={styles.kyunghwaComment2}>
              <Link to="/" className={styles.detailBtn}>자세히 보기</Link>
            </div>
          </div>

          <div className={styles.busanPngFrame}>
            <img src={busan} className={styles.busanPng} />
            <div className={styles.busanComment1}>부산 광안리</div>
            <div className={styles.busanDetail}></div>
            <div className={styles.busanComment2}>
              <Link to="/" className={styles.detailBtn}>자세히 보기</Link>
            </div>
          </div>

          <div className={styles.dalaengPngFrame}>
            <img src={dalaeng} className={styles.dalaengPng} />
            <div className={styles.dalaengComment1}>다랭이마을</div>
            <div className={styles.dalaengDetail}></div>
            <div className={styles.dalaengComment2}>
              <Link to="/" className={styles.detailBtn}>자세히 보기</Link>
            </div>
          </div>

          <div className={styles.kkotjiPngFrame}>
            <img src={kkotji} className={styles.kkotjiPng} />
            <div className={styles.kkotjiComment1}>꽃지해수욕장</div>
            <div className={styles.kkotjiDetail}></div>
            <div className={styles.kkotjiComment2}>
              <Link to="/" className={styles.detailBtn}>자세히 보기</Link>
            </div>
          </div>

          <div className={styles.sungsanPngFrame}>
            <img src={sungsan} className={styles.sungsanPng} />
            <div className={styles.sungsanComment1}>성산일출봉</div>
            <div className={styles.sungsanDetail}></div>
            <div className={styles.sungsanComment2}>
              <Link to="/" className={styles.detailBtn}>자세히 보기</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 카카오톡 프레임 */}
      <div className={styles.kakaoFrame}>
        <div className={styles.kakaoComment1}>너의 여행을 공유해봐</div>
        <div className={styles.kakaoComment2}>카카오톡으로 공유하기</div>
        <div className={styles.kakaoDetail}></div>
        <div className={styles.kakaoDetailBtn}>GO &rarr;</div>
      </div>

      {/* 제작자 정보 들어있는 프레임 */}
      <div className={styles.secondFrame}></div>
    </div>
  );
}

export default Home;
