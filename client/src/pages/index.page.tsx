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
        <img
          className={styles.proimage}
          src="/images/progame.jpg"
          alt="My Image"
          width={700}
          height={500}
        />

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
        Gamers新卒とは？ <br />
        ~~~
      </div>
      <div className={styles.detail}>
        <div style={{ fontSize: 30, fontWeight: 'bold' }}>登録できるゲーム</div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 30, marginTop: 30 }}>
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
        </div>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 30, marginTop: 30 }}>
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
          <div style={{ width: 120, height: 120, backgroundColor: 'black' }} />
        </div>
        <div style={{ height: 75, marginTop: 60 }}>
          <a href="" className={styles.yellow}>
            新規登録はこちらから
          </a>
        </div>
        <div>およそ3分程度で作成することが出来ます。</div>
      </div>
      {/* メールアドレスとパスワードを入力する登録 */}
      <div className={styles.submitarea}>
        <div style={{ height: 75 }}>
          <a href="" className={styles.yellow}>
            新規登録はこちらから
          </a>
        </div>
        <div>およそ3分程度で作成することが出来ます。</div>
      </div>
      {/* ご利用の流れ */}
      <div className={styles.infoarea}>
        <div>流れを書く</div>
      </div>
    </>
  );
};

export default Home;
