import { useAtom } from 'jotai';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { userAtom } from '../atoms/user';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [label, setLabel] = useState('');
  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.head}>
        {/* <Image src={back.src} /> */}

        <div className={styles.title} style={{}}>
          熱中した過去に
          <br />
          無駄な時間なんてない
          <br />
          俺はゲーム以外でも戦える
        </div>
      </div>
      {/* <div className={styles.backgroundphoto} /> */}
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
      </div>
      {/* メールアドレスとパスワードを入力する登録 */}
      <div className={styles.submitarea}>
        <div style={{ fontSize: 30, fontWeight: 30 }}>無料登録はこちら</div>
      </div>
    </>
  );
};

export default Home;
