import Button from '@mui/material/Button';
import type { UserModel } from 'commonTypesWithClient/models';
import Link from 'next/link';
import { useState } from 'react';
import { HumanIcon } from 'src/components/icons/HumanIcon';
import { createAuth } from 'src/utils/firebase';
import { logout } from 'src/utils/login';
import styles from './BasicHeader.module.css';

// eslint-disable-next-line complexity
export const BasicHeader = ({ user }: { user: UserModel | null }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const verified = createAuth().currentUser?.emailVerified as boolean;

  const handleDropdownClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLogout = async () => {
    if (confirm('ログアウトしますか？')) await logout();
  };
  // userの状況を監視して、nullの場合は初期画面に飛ばす

  return (
    <nav className={styles.container} role="navigation">
      <div className={styles.main}>
        <Link href="http://localhost:3000/">
          <div className={styles.maintitle}>RateMate</div>
        </Link>
        <Link href="/search">
          <Button style={{ textAlign: 'center' }} variant="contained" color="primary" size="large">
            企業を探す
          </Button>
        </Link>
        <div className={styles.users}>
          {user && verified ? (
            <div
              className={styles.userBtn}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              // style={{ marginTop: dropdownVisible ? '76px' : '0' }}
              onClick={handleDropdownClick}
            >
              {user?.photoURL !== undefined ? (
                <img
                  className={styles.userIcon}
                  src={user.photoURL}
                  height={24}
                  alt={user.displayName}
                />
              ) : (
                <HumanIcon size={18} fill="#555" />
              )}
              <span className={styles.userName}>{user?.displayName}</span>
              <span className={styles.dropdownIcon}>{dropdownVisible ? '▲' : '▼'}</span>
            </div>
          ) : (
            <Link href="/login">
              <div className={styles.userBtn}>
                <HumanIcon size={18} fill="#555" />
                <span className={styles.userName}>ログイン/新規作成</span>
              </div>
            </Link>
          )}
          {dropdownVisible && (
            <div
              className={styles.dropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/mypage/profile/">
                <div className={styles.dropdownItem}>マイページ</div>
              </Link>
              <div className={styles.dropdownItem} onClick={handleLogout}>
                ログアウト
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
