import Link from 'next/link';
import React from 'react';
import styles from './index.module.css';

const Tabmenu: React.FC = () => {
  return (
    <div className={styles.tabmain}>
      <Link href="http://localhost:3000/mypage/account">
        <div className={styles.tab}>ゲームアカウント連携</div>
      </Link>
      <Link href="http://localhost:3000/mypage/profile">
        <div className={styles.tab}>プロフィール</div>
      </Link>
      <Link href="http://localhost:3000/mypage/skillpr">
        <div className={styles.tab}>スキルPR</div>
      </Link>
      <Link href="http://localhost:3000/mypage/experience">
        <div className={styles.tab}>経歴情報</div>
      </Link>
      <Link href="http://localhost:3000/mypage/preferences">
        <div className={styles.tab}>希望条件</div>
      </Link>
      <Link href="http://localhost:3000/mypage/applications">
        <div className={styles.tab}>応募履歴</div>
      </Link>
      <Link href="http://localhost:3000/mypage/resume">
        <div className={styles.tab}>履歴書登録</div>
      </Link>
    </div>
  );
};

export default Tabmenu;
