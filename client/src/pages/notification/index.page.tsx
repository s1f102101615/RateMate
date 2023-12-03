import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { userAtom } from '../../atoms/user';
import { BasicHeaderLogined } from '../@components/BasicHeaderLogined/BasicHeaderLogined';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const notificationsPerPage = 10;

  // 通知のデータ構造(後で変更)
  type Notification = {
    icon: string;
    title: string;
    detail: string;
    time: string;
  };

  // 通知のデータ（サーバーから取得すると仮定）
  const notifications: Notification[] = [
    {
      icon: 'https://example.com/icon1.png',
      title: 'タイトル1',
      detail: '詳細1',
      time: '2022-01-01 10:00:00',
    },
    {
      icon: 'https://example.com/icon2.png',
      title: 'タイトル2',
      detail: '詳細2',
      time: '2022-01-02 11:00:00',
    },
    // 他の通知データ...
  ];

  // 通知を表示するコンポーネント
  const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
    <div className={styles.notificationItem}>
      <img className={styles.icon} src={notification.icon} />
      <div className={styles.onebox}>
        <div className={styles.title}>{notification.title}</div>
        <div className={styles.detail}>{notification.detail}</div>
        <div className={styles.time}>{notification.time}</div>
      </div>
    </div>
  );

  // ページネーションを実装するコンポーネント

  // 現在のページの通知を取得
  const currentNotifications = notifications.slice(
    (currentPage - 1) * notificationsPerPage,
    currentPage * notificationsPerPage
  );

  return (
    <>
      <BasicHeaderLogined user={user} />
      <div className={styles.notification}>
        <div className={styles.box}>
          <div>通知ページ</div>
          {currentNotifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
          <button onClick={() => setCurrentPage(currentPage + 1)}>次のページ</button>
        </div>
      </div>
    </>
  );
};

export default Home;
