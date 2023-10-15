/* eslint-disable max-lines */
import { useEffect, useState } from 'react';
import type { LoginnowProps } from '../@components/Loginnow/Loginnow';
import Loginnow from '../@components/Loginnow/Loginnow';
import styles from './index.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordtest, setPasswordtest] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const [isAccount, setIsAccount] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [academicDiscipline, setAcademicDiscipline] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');

  const handleBirthdayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBirthday(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress(event.target.value);
  };

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };

  const handleSchoolTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolType(event.target.value);
  };

  const handleSchoolNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolName(event.target.value);
  };

  const handleAcademicDisciplineChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcademicDiscipline(event.target.value);
  };

  const handleFavoriteGameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFavoriteGame(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // フォームの入力値を使用して何らかの処理を実行する
    // ...
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePasswordChangetest = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordtest(event.target.value);
  };

  const handleupSign = () => {
    // サインアップ処理を実行する
    setIsRegistered(true);
  };

  const handleEmailEnd = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // メールアドレスが正しい値かどうかを検証する
    if (!emailPattern.test(email)) {
      alert('正しいメールアドレスを入力してください。');
      return;
    }

    // パスワードが7文字以上であるかどうかを検証する
    const passwordPattern = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{7,}$/;
    if (!passwordPattern.test(password)) {
      alert('パスワードは英大文字小文字+数字で7文字以上にしてください。');
      return;
    }

    // パスワードが一致しているかどうかを検証する
    if (password !== passwordtest) {
      alert('パスワードが一致しません。');
      return;
    }

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

  // 個人情報を入力させる
  if (isAccount) {
    const loginnowProps: LoginnowProps = {
      registered: false,
      account: true,
    };
    return (
      <div>
        <Loginnow {...loginnowProps} />
        <div>
          <div className={styles.container}>
            <div className={styles.mainaccount}>
              <div className={styles.form}>
                <div className={styles.formGroup}>
                  <div className={styles.title}>プロフィールを登録してください</div>
                  {/* 生年月日、お住いの住所(都道府県)、就学情報、学校区分、学校名、学問系統
                  学部学科、一番よくやるゲームなどを入力させる */}
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="birthday" className={styles.label}>
                        生年月日
                      </label>
                      <input
                        type="text"
                        id="birthday"
                        name="birthday"
                        value={birthday}
                        onChange={handleBirthdayChange}
                        className={styles.input}
                      />
                    </div>
                    {/* 都道府県は47この選択肢から選ばせる */}
                    <div>
                      <label htmlFor="address" className={styles.label}>
                        都道府県
                      </label>
                      <select
                        id="address"
                        name="address"
                        value={address}
                        onChange={handleAddressChange}
                      >
                        <option value="">選択してください</option>
                        <option value="北海道">北海道</option>
                        <option value="青森県">青森県</option>
                        <option value="岩手県">岩手県</option>
                        <option value="宮城県">宮城県</option>
                        <option value="秋田県">秋田県</option>
                        <option value="山形県">山形県</option>
                        <option value="福島県">福島県</option>
                        <option value="茨城県">茨城県</option>
                        <option value="栃木県">栃木県</option>
                        <option value="群馬県">群馬県</option>
                        <option value="埼玉県">埼玉県</option>
                        <option value="千葉県">千葉県</option>
                        <option value="東京都">東京都</option>
                        <option value="神奈川県">神奈川県</option>
                        <option value="新潟県">新潟県</option>
                        <option value="富山県">富山県</option>
                        <option value="石川県">石川県</option>
                        <option value="福井県">福井県</option>
                        <option value="山梨県">山梨県</option>
                        <option value="長野県">長野県</option>
                        <option value="岐阜県">岐阜県</option>
                        <option value="静岡県">静岡県</option>
                        <option value="愛知県">愛知県</option>
                        <option value="三重県">三重県</option>
                        <option value="滋賀県">滋賀県</option>
                        <option value="京都府">京都府</option>
                        <option value="大阪府">大阪府</option>
                        <option value="兵庫県">兵庫県</option>
                        <option value="奈良県">奈良県</option>
                        <option value="和歌山県">和歌山県</option>
                        <option value="鳥取県">鳥取県</option>
                        <option value="島根県">島根県</option>
                        <option value="岡山県">岡山県</option>
                        <option value="広島県">広島県</option>
                        <option value="山口県">山口県</option>
                        <option value="徳島県">徳島県</option>
                        <option value="香川県">香川県</option>
                        <option value="愛媛県">愛媛県</option>
                        <option value="高知県">高知県</option>
                        <option value="福岡県">福岡県</option>
                        <option value="佐賀県">佐賀県</option>
                        <option value="長崎県">長崎県</option>
                        <option value="熊本県">熊本県</option>
                        <option value="大分県">大分県</option>
                        <option value="宮崎県">宮崎県</option>
                        <option value="鹿児島県">鹿児島県</option>
                        <option value="沖縄県">沖縄県</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="education" className={styles.label}>
                        就学情報
                      </label>
                      <input
                        type="text"
                        id="education"
                        name="education"
                        value={education}
                        onChange={handleEducationChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="schoolType" className={styles.label}>
                        学校区分
                      </label>
                      <input
                        type="text"
                        id="schoolType"
                        name="schoolType"
                        value={schoolType}
                        onChange={handleSchoolTypeChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="schoolName" className={styles.label}>
                        学校名
                      </label>
                      <input
                        type="text"
                        id="schoolName"
                        name="schoolName"
                        value={schoolName}
                        onChange={handleSchoolNameChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="academicDiscipline" className={styles.label}>
                        学問系統・学部学科
                      </label>
                      <input
                        type="text"
                        id="academicDiscipline"
                        name="academicDiscipline"
                        value={academicDiscipline}
                        onChange={handleAcademicDisciplineChange}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="favoriteGame" className={styles.label}>
                        一番よくやるゲーム
                      </label>
                      <input
                        type="text"
                        id="favoriteGame"
                        name="favoriteGame"
                        value={favoriteGame}
                        onChange={handleFavoriteGameChange}
                        className={styles.input}
                      />
                    </div>
                  </form>
                </div>
                <button onClick={handleback}>戻る</button>
                <button onClick={handlenext}>次へ</button>
              </div>
            </div>
          </div>
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

              <label className={styles.label} htmlFor="password">
                パスワード(確認用)
              </label>
              <input
                className={styles.password}
                type="password"
                id="password"
                name="password"
                required
                value={passwordtest}
                onChange={handlePasswordChangetest}
              />
            </div>
            <button onClick={handleEmailEnd} className={styles.btn} style={{ marginTop: '20px' }}>
              次へ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
