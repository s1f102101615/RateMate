import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  if (user) {
    router.push('/home');
    return null;
  }

  return (
    <>
      <BasicHeader user={user} />
      {/* 画像とモチベーティブな言葉のhead */}
      <div className={styles.head}>
        <img className={styles.proimage} src="/images/progame.jpg" alt="My Image" width="100%" />

        <div className={styles.title} style={{}}>
          熱中した過去に
          <br />
          無駄な時間なんてない
          <br />
          俺はゲーム以外でも戦える
        </div>
      </div>
      {/* <div className={styles.backgroundphoto} /> */}
      <div className={styles.pagedetail}>
        <span style={{ fontSize: 45, fontWeight: '600', marginBottom: 15, color: 'green' }}>
          Gamers新卒とは？ <br />
        </span>
        <div style={{ display: 'inline-block' }}>
          あなたの<b>ゲームのレート</b>や実績に基づいて、企業からオファーが届くサイトです。
          <br />
          自信のあるゲームのレートを登録して、オファーを受け取りましょう。
        </div>
        <div style={{ height: 75, marginTop: 80 }}>
          <a href="" className={styles.yellow}>
            新規登録はこちらから
          </a>
        </div>
        <div style={{ fontSize: 20 }}>およそ3分程度で作成することが出来ます。</div>
      </div>
      <div className={styles.detail}>
        <div style={{ fontSize: 40, fontWeight: 'bold', color: 'green' }} className={styles.font}>
          登録できるゲーム一覧
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 40, marginTop: 40 }}>
          <img
            src="/images/valorantLogo.svg"
            alt="Valorant"
            width={140}
            height={140}
            className={styles.valoicon}
          />
          <img src="/images/LoL_icon.svg" alt="League of Legends" width={140} height={140} />
          <img src="/images/apexLogo.png" alt="Apex Legends" width={140} height={140} />
          <img src="/images/ow2Logo.jpg" alt="OverWatch2" width={140} height={140} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 40, marginTop: 40 }}>
          <img src="/images/r6sLogo.webp" alt="Rainbow Six Siege" width={140} height={140} />
          <img src="/images/hearthstoneLogo.jpg" alt="Hearthtone" width={140} height={140} />
          <img src="/images/fortniteLogo.jpg" alt="Fortnite" width={140} height={140} />
          <img src="/images/sf6Logo.png" alt="SF6" width={140} height={140} />
        </div>
        <div style={{ height: 75, marginTop: 60 }}>
          <a href="" className={styles.yellow}>
            ゲームの追加申請はこちらから
          </a>
        </div>
        <div style={{ fontSize: 24 }}>申請から運営が判断して実装します</div>
      </div>
      {/* ご利用の流れ */}
      <div className={styles.infoarea}>
        <span style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 15, color: 'green' }}>
          採用までの流れ
        </span>
        <div className={styles.flow}>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/registration.png" alt="register" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>1.登録</div>
            <div className={styles.flowdetail}>
              ゲームのレートや <br />
              個人情報を登録します。
            </div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/trophy.png" alt="trophy" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>2.プロフィールの確認</div>
            <div className={styles.flowdetail}>
              各自情報を記入して <br />
              スカウト率アップ
            </div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/job-offer.png" alt="job-offer" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>3.オファー</div>
            <div className={styles.flowdetail}>企業からオファーが届きます</div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg}>
              <img src="/images/handshake.png" alt="handshake" width={130} height={130} />
            </div>
            <div className={styles.flowtitle}>4.採用</div>
            <div className={styles.flowdetail}>人気の企業からの内定ゲット</div>
          </div>
        </div>
        <div className={styles.submitarea}>
          <div className={styles.submitbox}>
            <div
              style={{ fontSize: 32, color: 'green', fontWeight: 'bold' }}
              className={styles.font}
            >
              さあ、登録であなたを証明しよう
            </div>
            <div style={{ height: 75, marginTop: 40 }}>
              <a href="" className={styles.yellow}>
                新規登録はこちらから
              </a>
            </div>
            <div style={{ fontSize: 20 }}>およそ3分程度で作成することが出来ます。</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
