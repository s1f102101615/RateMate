import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { userAtom } from '../../../atoms/user';
import { BasicHeaderLogined } from '../../@components/BasicHeaderLogined/BasicHeaderLogined';
import ImageUpload from '../../@components/ImageUpload';
import styles from './index.module.css';

function SkillprMyPage() {
  const [user] = useAtom(userAtom);
  const name = user?.displayName?.split(' ');
  const firstName = name?.[1];
  const lastName = name?.[0];
  console.log(`名字: ${lastName}`);
  console.log(`名前: ${firstName}`);
  return (
    <div>
      <BasicHeaderLogined user={user} />
      <div className={styles.container}>
        {/* ここにdivでタブを作りたい */}
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
        <div>
          <div className={styles.header}>名前・プロフィール変更</div>

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
    </div>
  );
}

export default SkillprMyPage;
