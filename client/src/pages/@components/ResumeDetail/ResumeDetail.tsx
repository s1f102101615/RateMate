import React from 'react';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  return (
    <div>
      <div>
        <div className={styles.header}>履歴書登録</div>
        <div>
          オンライン面談や通常面談を行う際に事前に履歴書をお送りする必要がございますので <br />
          アップロードをお願いします。 履歴書の書き方や、履歴書フォーマットは <br />
          「就活成功ガイド `&gt;` 履歴書 書き方リファレンス」 をご参照下さい。
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
