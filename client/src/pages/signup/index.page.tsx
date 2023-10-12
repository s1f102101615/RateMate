import { useEffect, useState } from 'react';
import { BasicHeader } from '../@components/BasicHeader/BasicHeader';
import styles from './index.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handleupSign = () => {
    // サインアップ処理を実行する
    setIsRegistered(true);
  };

  const handleEmailEnd = () => {
    // サインアップ処理を実行する
    setIsAccount(true);
  };

  // eslint-disable-next-line complexity
  useEffect(() => {
    if (isAccount) {
      const line = document.getElementById('line1');
      const number = document.getElementById('number2');
      if (line) {
        // 一秒待ってから実行
        setTimeout(() => {
          line.style.backgroundPosition = 'left top';
        }, 1);
        setTimeout(() => {
          number?.classList.remove(styles.number);
          number?.classList.add(styles.active);
        }, 680);
      }
    } else if (isRegistered) {
      const line1 = document.getElementById('line1');
      const line2 = document.getElementById('line2');
      const number1 = document.getElementById('number2');
      const number2 = document.getElementById('number3');
      if (line1 && line2) {
        line1.style.backgroundPosition = 'left bottom';
        number1?.classList.remove(styles.number);
        number1?.classList.add(styles.active);
        setTimeout(() => {
          line2.style.backgroundPosition = 'left top';
        }, 1);
        setTimeout(() => {
          number2?.classList.remove(styles.number);
          number2?.classList.add(styles.active);
        }, 680);
      }
    }
  });

  const handleOff = () => {
    // サインアップ処理を実行する
    setIsAccount(false);
    setIsRegistered(false);
  };

  const handlenext = () => {
    handleOff();
    handleupSign();
  };

  const handleback = () => {
    handleOff();
  };

  if (isRegistered) {
    return (
      <>
        <BasicHeader user={null} />
        <div style={{ backgroundColor: 'black' }} className={styles.stepbar}>
          <ul>
            <li className={styles.li}>
              <div className={styles.active}>1</div>
              <div>メールアドレス</div>
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number2">
                2
              </div>
              <div>メールアドレス</div>
              <div id="line1" className={styles.line} />
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number3">
                3
              </div>
              <div>メールアドレス</div>
              <div id="line2" className={styles.line} />
            </li>
          </ul>
        </div>
        <div style={{ paddingTop: 100 }}>
          <div>仮登録が完了しました。</div>
        </div>
      </>
    );
  }

  if (isAccount) {
    return (
      <>
        <BasicHeader user={null} />
        <div style={{ backgroundColor: 'black' }} className={styles.stepbar}>
          <ul>
            <li className={styles.li}>
              <div className={styles.active}>1</div>
              <div>メールアドレス</div>
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number2">
                2
              </div>
              <div>メールアドレス</div>
              <div id="line1" className={styles.line} />
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number3">
                3
              </div>
              <div>メールアドレス</div>
              <div id="line2" className={styles.line} />
            </li>
          </ul>
        </div>
        <div style={{ paddingTop: 100 }}>
          <div>個人情報を登録してください</div>
          <button onClick={handleback}>戻る</button>
          <button onClick={handlenext}>次へ</button>
        </div>
      </>
    );
  }

  return (
    <>
      <BasicHeader user={null} />
      <div style={{ paddingTop: 100 }}>
        <div style={{ backgroundColor: 'black' }} className={styles.stepbar}>
          <ul>
            <li className={styles.li}>
              <div className={styles.active}>1</div>
              <div>メールアドレス</div>
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number2">
                2
              </div>
              <div>メールアドレス</div>
              <div id="line1" className={styles.line} />
            </li>
            <li className={styles.li}>
              <div className={`${styles.number}`} id="number3">
                3
              </div>
              <div>メールアドレス</div>
              <div id="line2" className={styles.line} />
            </li>
          </ul>
        </div>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleEmailEnd}>次へ</button>
      </div>
    </>
  );
};
export default Signup;
