import { useEffect, useState } from 'react';
import type { LoginnowProps } from '../@components/Loginnow/Loginnow';
import Loginnow from '../@components/Loginnow/Loginnow';
import styles from './index.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAccount, setIsAccount] = useState(false);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
    const line = document.getElementById('line1');
    const number = document.getElementById('number2');
    if (line) {
      line.style.backgroundPosition = 'right bottom';
      number?.classList.remove(styles.active);
      number?.classList.add(styles.number);
    }

    handleOff();
  };

  if (isRegistered) {
    const loginnowProps: LoginnowProps = {
      registered: true,
      account: false,
    };
    return (
      <div>
        <Loginnow {...loginnowProps} />
        <div style={{ paddingTop: 100 }}>
          <div>仮登録が終了しました。</div>
        </div>
      </div>
    );
  }

  if (isAccount) {
    const loginnowProps: LoginnowProps = {
      registered: false,
      account: true,
    };
    return (
      <div>
        <Loginnow {...loginnowProps} />
        <div style={{ paddingTop: 100 }}>
          <div>個人情報を登録してください</div>
          <button onClick={handleback}>戻る</button>
          <button onClick={handlenext}>次へ</button>
        </div>
      </div>
    );
  }
  const loginnowProps: LoginnowProps = {
    registered: false,
    account: false,
  };
  return (
    <div>
      <Loginnow {...loginnowProps} />
      {/* メールアドレスパスワードを入力 */}
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.form}>
            <div className={styles.formGroup}>
              <div className={styles.title}>新規ユーザー登録(無料)</div>
              <div className={styles.notion}>
                gamersのサービスをご利用いただくには会員登録が必要です。
              </div>
              <label className={styles.label} htmlFor="email">
                メールアドレス
              </label>
              <input
                className={styles.email}
                type="email"
                id="email"
                name="email"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="password">
                パスワード
              </label>
              <input
                className={styles.password}
                type="password"
                id="password"
                name="password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <button onClick={handleEmailEnd}>次へ</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
