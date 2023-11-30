import React from 'react';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  const icons = ['icon1', 'icon2', 'icon3']; // ここにアイコンの名前やパスを入れます
  return (
    <div>
      <div className={styles.header}>ゲームアカウント連携</div>

      <div id="separated">
        <div className={styles.title}>連携済ゲームアカウント</div>
        {/* アイコンを複数個並べる */}
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            gap: '10px',
            margin: 10,
          }}
        >
          <div style={{ backgroundColor: 'black', width: '50px', height: '50px' }} />
          <div style={{ backgroundColor: 'black', width: '50px', height: '50px' }} />
          <div style={{ backgroundColor: 'black', width: '50px', height: '50px' }} />
        </div>

        <div>
          <div className={styles.title}>自動連携</div>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <input type="checkbox" id="autoLink" name="autoLink" />
            <div>月末にアカウントを自動連携する</div>
          </div>
          <div style={{ fontSize: 12 }}>
            自動連携された結果をメールで受け取る必要がない場合は、
            <br />
            通知設定ページの「レート通知を受け取る」
            <br />
            をオフにしてください。
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#dddddd',
            width: '600px',
            height: '500px',
            borderRadius: '10px',
          }}
        />
        <div>
          <div>League of Legends</div>
          <div>apex</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
