import { useAtom } from 'jotai';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);

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
        <span style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 15, color: 'green' }}>
          Gamers新卒とは？ <br />
        </span>
        あなたのゲームのレートや実績に基づいて、企業からオファーが届くサイトです。
        <br />
        自信のあるゲームのレートを登録して、オファーを受け取りましょう。
        <div style={{ height: 75, marginTop: 95 }}>
          <a href="" className={styles.yellow}>
            新規登録はこちらから
          </a>
        </div>
        <div style={{ fontSize: 20 }}>およそ3分程度で作成することが出来ます。</div>
      </div>
      <div className={styles.detail}>
        <div style={{ fontSize: 40, fontWeight: 'bold', color: 'green' }}>登録できるゲーム</div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 40, marginTop: 40 }}>
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 40, marginTop: 40 }}>
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
          <div style={{ width: 140, height: 140, backgroundColor: 'black' }} />
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
            <div className={styles.flowimg} />
            <div className={styles.flowtitle}>1.登録</div>
            <div className={styles.flowdetail}>
              ゲームのレートや <br />
              個人情報を登録します。
            </div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg} />
            <div className={styles.flowtitle}>2.プロフィールの確認</div>
            <div className={styles.flowdetail}>
              各自情報を記入して <br />
              スカウト率アップ
            </div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg} />
            <div className={styles.flowtitle}>3.オファー</div>
            <div className={styles.flowdetail}>企業からオファーが届きます</div>
          </div>
          <div className={styles.flowcard}>
            <div className={styles.flowimg} />
            <div className={styles.flowtitle}>4.採用</div>
            <div className={styles.flowdetail}>人気の企業からの内定ゲット</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
