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
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [schooltype, setSchoolType] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [academicDiscipline, setAcademicDiscipline] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  // yearの選択肢
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= 1900; i--) {
    years.push(i);
  }

  const schooldetail = [
    '大学院',
    '大学',
    '短期大学',
    '高等専門学校',
    '専門学校',
    '海外の学校',
    '高等学校',
    '中学校',
    '小学校',
    'その他',
  ];

  const academiclist = [
    '情報・システム',
    '数学・物理系',
    '機械工学・電子工学',
    '建築・土木・環境・材料・物質・資源',
    '化学・生物学・科学・理学',
    '医学・薬学・看護・保健',
    '農・水産・畜産学',
    '船舶・海洋・航空・宇宙',
    'その他理系',
    '文学・人文学・語学',
    '経済学・経営学・商学系',
    '法学・政治学・社会学・国際関係学',
    'その他文系',
    '教員養成・教育学',
    '芸術学',
    '生活科学・体育・栄養・健康福祉・住居',
    '総合科学',
  ];

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(event.target.value);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDay(event.target.value);
  };

  const handleAddressChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAddress(event.target.value);
  };

  const handleEducationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };

  const handleSchooldetailChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSchoolType(event.target.value);
  };

  const handleSchoolNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSchoolName(event.target.value);
  };

  const handleAcademicDisciplineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        <div className={styles.container} style={{ height: '78.55vh' }}>
          <div className={styles.mainaccount} style={{ height: 540 }}>
            <div>仮登録が完了</div>
            <div>仮登録が完了しました。</div>
            <div>メールをご確認ください</div>
            <div>ご登録のメールアドレスに招待メールを送信しました。</div>
            <div>メールに記述されているURLから本登録を完了してください。</div>
            <div>*注意事項</div>
            <div>まれに招待メールが「迷惑メール」扱いされる場合がございます。メールが届いていない場合、メールボックスの「ゴミ箱」および「迷惑メール」をご確認ください。</div>
          </div>
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
                  <div className={styles.title} style={{ fontSize: 26, marginBottom: 30 }}>
                    プロフィールを登録してください
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                      <label htmlFor="birthday" className={styles.label}>
                        生年月日
                      </label>
                      {/* 年と月と日をselectから選ぶ */}
                      <div>
                        <select id="year" name="year" value={year} onChange={handleYearChange}>
                          <option value="">--</option>
                          {years.map((year) => (
                            <option key={year} value={year}>
                              {year}年
                            </option>
                          ))}
                        </select>
                        <label htmlFor="year">年</label>

                        <select id="month" name="month" value={month} onChange={handleMonthChange}>
                          <option value="">--</option>
                          <option value="1">1月</option>
                          <option value="2">2月</option>
                          <option value="3">3月</option>
                          <option value="4">4月</option>
                          <option value="5">5月</option>
                          <option value="6">6月</option>
                          <option value="7">7月</option>
                          <option value="8">8月</option>
                          <option value="9">9月</option>
                          <option value="10">10月</option>
                          <option value="11">11月</option>
                          <option value="12">12月</option>
                        </select>
                        <label htmlFor="month">月</label>

                        <select id="day" name="day" value={day} onChange={handleDayChange}>
                          <option value="">--</option>
                          <option value="1">1日</option>
                          <option value="2">2日</option>
                          <option value="3">3日</option>
                          <option value="4">4日</option>
                          <option value="5">5日</option>
                          <option value="6">6日</option>
                          <option value="7">7日</option>
                          <option value="8">8日</option>
                          <option value="9">9日</option>
                          <option value="10">10日</option>
                          <option value="11">11日</option>
                          <option value="12">12日</option>
                          <option value="13">13日</option>
                          <option value="14">14日</option>
                          <option value="15">15日</option>
                          <option value="16">16日</option>
                          <option value="17">17日</option>
                          <option value="18">18日</option>
                          <option value="19">19日</option>
                          <option value="20">20日</option>
                          <option value="21">21日</option>
                          <option value="22">22日</option>
                          <option value="23">23日</option>
                          <option value="24">24日</option>
                          <option value="25">25日</option>
                          <option value="26">26日</option>
                          <option value="27">27日</option>
                          <option value="28">28日</option>
                          <option value="29">29日</option>
                          <option value="30">30日</option>
                          <option value="31">31日</option>
                        </select>
                        <label htmlFor="day">日</label>
                      </div>
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
                      <select
                        id="schooltype"
                        name="schooltype"
                        value={schooltype}
                        onChange={handleSchooldetailChange}
                      >
                        <option value="">--</option>
                        {schooldetail.map((detail) => (
                          <option key={detail} value={detail}>
                            {detail}
                          </option>
                        ))}
                      </select>
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
                      <select
                        id="academicDiscipline"
                        name="academicDiscipline"
                        value={academicDiscipline}
                        onChange={handleAcademicDisciplineChange}
                      >
                        <option value="">--</option>
                        {academiclist.map((academic) => (
                          <option key={academic} value={academic}>
                            {academic}
                          </option>
                        ))}
                      </select>
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
                <div style={{ flexDirection: 'row', display: 'flex', gap: '40px' }}>
                  <button onClick={handleback} className={styles.btn} style={{ marginTop: '20px' }}>
                    戻る
                  </button>
                  <button onClick={handlenext} className={styles.btn} style={{ marginTop: '20px' }}>
                    次へ
                  </button>
                </div>
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
