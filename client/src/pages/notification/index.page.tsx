/* eslint-disable max-lines */
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../../atoms/user';
import { BasicHeaderLogined } from '../@components/BasicHeaderLogined/BasicHeaderLogined';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [notifications, setNotifications] = useState<
    {
      id: number;
      userId: string;
      title: string;
      content: string;
      url: string;
      isRead: boolean;
      createdAt: Date;
    }[]
  >(); // 通知のデータ構造(後で変更)
  const notificationsPerPage = 10;

  // 通知のデータ構造(後で変更)
  type Notification = {
    id: number;
    userId: string;
    title: string;
    content: string;
    url: string;
    isRead: boolean;
    createdAt: Date;
  };

  const setNotificationsFirst = async () => {
    // 通知のデータ（サーバーから取得すると仮定）
    const notification = await apiClient.notification.get();

    setNotifications(notification.body);
    console.log(notification);
  };

  useEffect(() => {
    setNotificationsFirst();
  }, []);

  // 通知のデータ（サーバーから取得すると仮定）
  // const notifications: Notification[] = [
  //   {
  //     icon: 'https://example.com/icon1.png',
  //     title: '株式会社cinraから「いいね」が届きました',
  //     detail:
  //       '【芸術文化をルーツとするメディアブランド】自社メディアとクライアントワークに携われるフロントエンジニアを募集！',
  //     time: '2022年01月01日',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },
  //   {
  //     icon: 'https://example.com/icon2.png',
  //     title: 'タイトル2',
  //     detail: '詳細2',
  //     time: '2022-01-02 11:00:00',
  //   },

  // 他の通知データ...

  // 通知を表示するコンポーネント
  const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
    <div className={styles.notificationItem}>
      {/* <img className={styles.icon} src={notification.icon} /> */}
      <div className={styles.icon} />
      <div className={styles.onebox}>
        <Link href={notification.url}>
          <div className={styles.title}>{notification.title}</div>
        </Link>
        <div className={styles.detail}>{notification.content}</div>
        <div className={styles.time}>{notification.createdAt.toString()}</div>
      </div>
    </div>
  );

  // ページネーションを実装するコンポーネント
  if (notifications === undefined) return <></>;
  const totalPages = Math.ceil(notifications.length / notificationsPerPage);

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
          <div className={styles.maintitle}>通知ページ</div>
          {currentNotifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
          <div className={styles.pagenum}>
            {currentPage > 1 ? (
              <button className={styles.pagefirst} onClick={() => setCurrentPage(currentPage - 1)}>
                前へ
              </button>
            ) : (
              <button
                className={styles.badpagefirst}
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled
              >
                前へ
              </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => {
              const buttonStyle = pageNumber === currentPage ? styles.currentPage : styles.page;

              return (
                <button
                  key={pageNumber}
                  className={buttonStyle}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </button>
              );
            })}
            {currentPage < totalPages ? (
              <button className={styles.pagelast} onClick={() => setCurrentPage(currentPage + 1)}>
                次へ
              </button>
            ) : (
              <button className={styles.badpagelast} disabled>
                次へ
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
