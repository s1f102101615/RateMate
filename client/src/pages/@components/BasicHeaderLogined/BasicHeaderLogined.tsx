import type { UserModel } from 'commonTypesWithClient/models';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBell } from 'react-icons/fa';
import { HumanIcon } from 'src/components/icons/HumanIcon';
import { apiClient } from 'src/utils/apiClient';
import { createAuth } from 'src/utils/firebase';
import { logout } from 'src/utils/login';
import styles from './BasicHeaderLogined.module.css';

// ...

// eslint-disable-next-line complexity
export const BasicHeaderLogined = ({ user }: { user: UserModel | null }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [notifications, setNotifications] = useState(0);

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

  const setNotificationsFirst = async () => {
    // 通知のデータ（サーバーから取得すると仮定）
    const notification = await apiClient.notification.get();

    setNotifications(notification.body.length);
    console.log(notification.body.length);
  };

  useEffect(() => {
    setNotificationsFirst();
  }, []);

  return (
    <nav className={styles.container} role="navigation">
      <div className={styles.main}>
        <div style={{ flexDirection: 'row', display: 'flex', gap: 30 }}>
          <Link href="http://localhost:3000/">
            <div className={styles.maintitle}>RateMate</div>
          </Link>
          <Link href="/home" style={{ marginTop: 20 }} className={styles.menu}>
            マイページ
          </Link>
          <Link style={{ marginTop: 20 }} href="/mypage/profile/" className={styles.menu}>
            プロフィール
          </Link>
          <Link style={{ marginTop: 20 }} href="/search" className={styles.menu}>
            求人・企業検索
          </Link>
        </div>
        {/* 通知のアイコン */}
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Link style={{ marginTop: 6, marginRight: 3 }} href="/notification">
            <FaBell size={23.5} />
            {notifications > 0 && (
              <div
                style={{
                  position: 'relative',
                  top: -27,
                  right: -11,
                  width: 15,
                  height: 15,
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: 10,
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                {notifications}
              </div>
            )}
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
                {/* {user?.photoURL !== undefined ? (
                <img
                  className={styles.userIcon}
                  src={user.photoURL}
                  height={24}
                  alt={user.displayName}
                />
              ) : (
                <HumanIcon size={18} fill="#555" />
              )} */}
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
      </div>
    </nav>
  );
};
