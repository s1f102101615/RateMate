import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';
import ImageUpload from '../ImageUpload';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  return (
    <div>
      <div>
        <div className={styles.header}>応募履歴</div>

        <div id="separated">
          <div className={styles.title}>名前</div>
          <div>
            <TextField label="姓" variant="outlined" style={{ margin: '16px 32px' }} />
            <TextField label="名" variant="outlined" style={{ margin: '16px 32px' }} />
          </div>
          <div>
            <div className={styles.title}>よみがな</div>
            <TextField label="姓 (カナ)" variant="outlined" style={{ margin: '16px 32px' }} />
            <TextField label="名 (カナ)" variant="outlined" style={{ margin: '16px 32px' }} />
          </div>
        </div>

        <div hidden>
          <h1>もしくは</h1>

          <div className={styles.title}>名前</div>
          <div>
            <TextField label={'名前'} variant="outlined" style={{ margin: '16px 32px' }} />
          </div>
          <div>
            <div className={styles.title}>よみがな</div>
            <TextField label="よみがな" variant="outlined" style={{ margin: '16px 32px' }} />
          </div>
        </div>

        <div hidden>
          <div className={styles.title}>性別</div>
          <RadioGroup row defaultValue="男性" className={styles.gender}>
            <FormControlLabel value="男性" control={<Radio />} label="男性" />
            <FormControlLabel value="女性" control={<Radio />} label="女性" />
            <FormControlLabel value="その他" control={<Radio />} label="その他" />
          </RadioGroup>
        </div>
        <div>
          <div className={styles.title}>生年月日</div>
          <TextField
            label="生年月日"
            type="date"
            defaultValue="2002-05-28"
            InputLabelProps={{
              shrink: true,
            }}
            style={{ margin: '16px' }}
          />
        </div>

        <div>
          <div className={styles.title}>プロフィール画像</div>
          <div> ※5MB以内</div>
          <ImageUpload />
        </div>
        <div className={styles.btn}>
          <Button variant="contained" color="primary">
            保存
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
