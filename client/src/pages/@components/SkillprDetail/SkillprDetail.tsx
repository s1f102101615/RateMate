import { TextField } from '@mui/material';
import React from 'react';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  return (
    <div>
      <div>
        <div className={styles.header}>スキルPR</div>

        <div id="separated">
          <div className={styles.title}>特技PR(スキル、実績、経験など)</div>
          <div>20文字以内、最大3つまで</div>
          <div>
            <TextField label="1" variant="outlined" style={{ margin: '16px 32px' }} />
            <TextField label="2" variant="outlined" style={{ margin: '16px 32px' }} />
            <TextField label="3 " variant="outlined" style={{ margin: '16px 32px' }} />
          </div>
          <div>
            <div className={styles.title}>自己PR</div>
            <div>
              自分の強みや長所、頑張ったことなど、企業にアピールしたいことをご記入ください。
              （300文字程度）
              <br />
              ※スカウトを行う企業に公開されるため、氏名などの個人情報の記入はお控えください。
            </div>
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
    </div>
  );
};

export default ProfileDetail;
