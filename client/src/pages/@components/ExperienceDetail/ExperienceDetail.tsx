import { TextField } from '@mui/material';
import React from 'react';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  return (
    <div>
      <div>
        <div className={styles.header}>経歴情報</div>
        <div>
          研究内容やインターン・アルバイト経験を入力します。
          <br />
          入力することでより質の高いスカウトを受け取ることができます。 <br />
          こちらに入力された情報はスカウトを受け取る際に公開されます。 <br />
          公開範囲についてはこちらからご確認いただけます。 <br />
        </div>

        <div id="separated">
          <div className={styles.title}>研究内容</div>
          <div>・研究テーマ</div>
          <TextField label="" variant="outlined" style={{ margin: '16px 32px' }} />
          <div>・研究詳細</div>
          <TextField label="" variant="outlined" style={{ margin: '16px 32px' }} />
        </div>

        <div id="separated">
          <div className={styles.title}>研究実績</div>

          <div>・研究実績</div>
          <div style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <input type="checkbox" id="paper" name="paper" />
              <div>学会で表彰経験がある</div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <input type="checkbox" id="paper" name="paper" />
              <div>学術誌で論文が掲載されたことがある</div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <input type="checkbox" id="paper" name="paper" />
              <div>学会での発表経験がある</div>
            </div>
          </div>

          <div>・研究詳細</div>
          {/* テキストエリア */}
          <textarea
            style={{
              width: '600px',
              height: '200px',
              backgroundColor: '#f3f3f3',
              borderRadius: '10px',
              margin: '10px',
            }}
          />
        </div>

        <div id="separated">
          <div className={styles.title}>大会・コンテスト</div>

          <div>・入賞受賞経験</div>
          <div style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <input type="checkbox" id="paper" name="paper" />
              <div>コンテストで入賞経験がある</div>
            </div>
          </div>

          <div>・入賞受賞詳細</div>
          {/* テキストエリア */}
          <textarea
            style={{
              width: '600px',
              height: '200px',
              backgroundColor: '#f3f3f3',
              borderRadius: '10px',
              margin: '10px',
            }}
          />
        </div>
        <div>
          <div className={styles.title}>インターン・アルバイト経験</div>
          <div style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <input type="checkbox" id="paper" name="paper" />
              <div>インターン経験がある</div>
            </div>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <input type="checkbox" id="paper" name="paper" />
              <div>アルバイト経験がある</div>
            </div>
          </div>

          <div>・インターン・アルバイト経験詳細</div>
          {/* テキストエリア */}
          <textarea
            style={{
              width: '600px',
              height: '200px',
              backgroundColor: '#f3f3f3',
              borderRadius: '10px',
              margin: '10px',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
