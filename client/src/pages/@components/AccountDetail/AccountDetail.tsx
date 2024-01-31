/* eslint-disable complexity */
import React, { useState } from 'react';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  const icons = ['icon1', 'icon2', 'icon3']; // ここにアイコンの名前やパスを入れます
  const [valorant, setValorant] = useState(false);

  const switchValorant = () => {
    setValorant(!valorant);
  };
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
            width: '750px',
            height: '580px',
            borderRadius: '10px',
            marginBottom: '20px',
          }}
        >
          <div>
            <div className={styles.gamebar}>
              <div>
                <img src="../../../images/valorantLogo.svg" alt="Valorant" width={50} height={50} />
                Valorant
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? (
                  <input className={styles.gamenameinput} placeholder="RiotIDを入力してください" />
                ) : (
                  <div />
                )}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img
                  src="../../../images/LoL_icon.svg"
                  alt="League of Legends"
                  width={50}
                  height={50}
                />
                League of Legends
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img src="../../../images/apexLogo.png" alt="Apex" width={50} height={50} />
                Apex
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img src="../../../images/ow2Logo.jpg" alt="OverWatch2" width={50} height={50} />
                OverWatch2
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img
                  src="../../../images/r6sLogo.webp"
                  alt="Rainbow Six Siege"
                  width={50}
                  height={50}
                />
                Rainbow Six Siege
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img
                  src="../../../images/hearthstoneLogo.jpg"
                  alt="HearthStone"
                  width={50}
                  height={50}
                />
                HearthStone
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img src="../../../images/fortniteLogo.jpg" alt="Fortnite" width={50} height={50} />
                Fortnite
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
            <div className={styles.gamebar}>
              <div>
                <img
                  src="../../../images/sf6Logo.png"
                  alt="Street Fighter 6"
                  width={50}
                  height={50}
                />
                Street Fighter 6
              </div>
              <div style={{ flexDirection: 'row', display: 'flex', gap: 20, alignItems: 'center' }}>
                {valorant ? <input className={styles.gamenameinput} /> : <div />}
                <div onClick={switchValorant} className={styles.button}>
                  登録する
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
