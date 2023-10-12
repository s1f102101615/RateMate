import { useState } from 'react';
import { BasicHeader } from '../@components/BasicHeader/BasicHeader';

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

  const handleOff = () => {
    // サインアップ処理を実行する
    setIsAccount(false);
  };

  const handlenext = () => {
    handleupSign();
    handleOff();
  };

  if (isRegistered) {
    return (
      <>
        <BasicHeader user={null} />
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
        <div style={{ paddingTop: 100 }}>
          <div>個人情報を登録してください</div>
          <button onClick={handlenext}>次へ</button>
        </div>
      </>
    );
  }

  return (
    <>
      <BasicHeader user={null} />
      <div style={{ paddingTop: 100 }}>
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
