/* eslint-disable complexity */
/* eslint-disable max-lines */
import { TextField } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [education, setEducation] = useState('');
  const [schoolType, setSchoolType] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [academicDiscipline, setAcademicDiscipline] = useState('');
  const [favoriteGame, setFavoriteGame] = useState('');
  const [birthday, setBirthday] = useState<Date | undefined>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const userdata = await apiClient.userinfo.get();
      setGender(userdata.body?.gender ?? '');
      setAddress(userdata.body?.address ?? '');
      setEducation(userdata.body?.education ?? '');
      setSchoolType(userdata.body?.schoolType ?? '');
      setSchoolName(userdata.body?.schoolName ?? '');
      setBirthday(userdata.body?.birthday ?? undefined);
      setAcademicDiscipline(userdata.body?.academicDiscipline ?? '');
      setFavoriteGame(userdata.body?.favoriteGame ?? '');
      setFirstName(userdata.body?.firstName ?? '');
      setLastName(userdata.body?.lastName ?? '');
    };
    fetch();
  });

  const schooldetail = [
    '大学院',
    '大学',
    '短期大学',
    '高等専門学校',
    '専門学校',
    '海外の学校',
    '高等学校',
    '中学校',
    '小学校',
    'その他',
  ];

  const academiclist = [
    '情報・システム',
    '数学・物理系',
    '機械工学・電子工学',
    '建築・土木・環境・材料・物質・資源',
    '化学・生物学・科学・理学',
    '医学・薬学・看護・保健',
    '農・水産・畜産学',
    '船舶・海洋・航空・宇宙',
    'その他理系',
    '文学・人文学・語学',
    '経済学・経営学・商学系',
    '法学・政治学・社会学・国際関係学',
    'その他文系',
    '教員養成・教育学',
    '芸術学',
    '生活科学・体育・栄養・健康福祉・住居',
    '総合科学',
  ];

  // アカウントの情報を取得

  return (
    // <div>
    //   <div>
    //     <div className={styles.header}>名前・プロフィール変更</div>

    //     <div id="separated">
    //       <div className={styles.title}>名前</div>
    //       <div>
    //         <TextField label="姓" variant="outlined" style={{ margin: '16px 32px' }} />
    //         <TextField label="名" variant="outlined" style={{ margin: '16px 32px' }} />
    //       </div>
    //     </div>

    //     <div hidden>
    //       <h1>もしくは</h1>

    //       <div className={styles.title}>名前</div>
    //       <div>
    //         <TextField label={'名前'} variant="outlined" style={{ margin: '16px 32px' }} />
    //       </div>
    //       <div>
    //         <div className={styles.title}>よみがな</div>
    //         <TextField label="よみがな" variant="outlined" style={{ margin: '16px 32px' }} />
    //       </div>
    //     </div>

    //     <div>
    //       <div className={styles.title}>性別</div>
    //       <RadioGroup row defaultValue="男性" className={styles.gender}>
    //         <FormControlLabel value="男性" control={<Radio />} label="男性" />
    //         <FormControlLabel value="女性" control={<Radio />} label="女性" />
    //         <FormControlLabel value="その他" control={<Radio />} label="その他" />
    //       </RadioGroup>
    //     </div>
    //     <div>
    //       <div className={styles.title}>生年月日</div>
    //       <TextField
    //         label="生年月日"
    //         type="date"
    //         defaultValue="2002-05-28"
    //         InputLabelProps={{
    //           shrink: true,
    //         }}
    //         style={{ margin: '16px' }}
    //       />
    //     </div>

    //     <div>
    //       <div className={styles.title}>都道府県</div>
    //       {/* <select id="address" name="address" value={address} onChange={handleAddressChange}> */}
    //       <select id="address" name="address" style={{ margin: 12 }}>
    //         <option value="" disabled>
    //           選択してください
    //         </option>
    //         <option value="北海道">北海道</option>
    //         <option value="青森県">青森県</option>
    //         <option value="岩手県">岩手県</option>
    //         <option value="宮城県">宮城県</option>
    //         <option value="秋田県">秋田県</option>
    //         <option value="山形県">山形県</option>
    //         <option value="福島県">福島県</option>
    //         <option value="茨城県">茨城県</option>
    //         <option value="栃木県">栃木県</option>
    //         <option value="群馬県">群馬県</option>
    //         <option value="埼玉県">埼玉県</option>
    //         <option value="千葉県">千葉県</option>
    //         <option value="東京都">東京都</option>
    //         <option value="神奈川県">神奈川県</option>
    //         <option value="新潟県">新潟県</option>
    //         <option value="富山県">富山県</option>
    //         <option value="石川県">石川県</option>
    //         <option value="福井県">福井県</option>
    //         <option value="山梨県">山梨県</option>
    //         <option value="長野県">長野県</option>
    //         <option value="岐阜県">岐阜県</option>
    //         <option value="静岡県">静岡県</option>
    //         <option value="愛知県">愛知県</option>
    //         <option value="三重県">三重県</option>
    //         <option value="滋賀県">滋賀県</option>
    //         <option value="京都府">京都府</option>
    //         <option value="大阪府">大阪府</option>
    //         <option value="兵庫県">兵庫県</option>
    //         <option value="奈良県">奈良県</option>
    //         <option value="和歌山県">和歌山県</option>
    //         <option value="鳥取県">鳥取県</option>
    //         <option value="島根県">島根県</option>
    //         <option value="岡山県">岡山県</option>
    //         <option value="広島県">広島県</option>
    //         <option value="山口県">山口県</option>
    //         <option value="徳島県">徳島県</option>
    //         <option value="香川県">香川県</option>
    //         <option value="愛媛県">愛媛県</option>
    //         <option value="高知県">高知県</option>
    //         <option value="福岡県">福岡県</option>
    //         <option value="佐賀県">佐賀県</option>
    //         <option value="長崎県">長崎県</option>
    //         <option value="熊本県">熊本県</option>
    //         <option value="大分県">大分県</option>
    //         <option value="宮崎県">宮崎県</option>
    //         <option value="鹿児島県">鹿児島県</option>
    //         <option value="沖縄県">沖縄県</option>
    //       </select>
    //     </div>
    //     <div>
    //       <div className={styles.title}>就学状況</div>
    //       <TextField label={'就学状況'} variant="outlined" style={{ margin: '16px 32px' }} />
    //     </div>
    //     <div>
    //       <div className={styles.title}>学校区分</div>
    //       <select id="schooltype" name="schooltype" style={{ margin: 12 }}>
    //         <option value="" disabled>
    //           --
    //         </option>
    //         {schooldetail.map((detail) => (
    //           <option key={detail} value={detail}>
    //             {detail}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     <div>
    //       <div className={styles.title}>学校名</div>
    //       <TextField label={'学校名'} variant="outlined" style={{ margin: '16px 32px' }} />
    //     </div>
    //     <div>
    //       <div className={styles.title}>学部・学科</div>
    //       <select id="academic" name="academic" style={{ margin: 12 }}>
    //         <option value="" disabled>
    //           --
    //         </option>
    //         {academiclist.map((academic) => (
    //           <option key={academic} value={academic}>
    //             {academic}
    //           </option>
    //         ))}
    //       </select>
    //     </div>
    //     <div>
    //       <div className={styles.title}>一番よくやるゲーム</div>
    //       <TextField
    //         label={'一番よくやるゲーム'}
    //         variant="outlined"
    //         style={{ margin: '16px 32px' }}
    //       />
    //     </div>
    //   </div>
    // </div>
    <div>
      <div>
        <div className={styles.header}>名前・プロフィール変更</div>

        <div id="separated">
          <div className={styles.title}>名前</div>
          <div>
            {lastName}
            {firstName}
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

        <div>
          <div className={styles.title}>性別</div>
          {gender}
        </div>
        <div>
          <div className={styles.title}>生年月日</div>
          {birthday ? new Date(birthday).toLocaleDateString() : 'No birthday set'}
        </div>

        <div>
          <div className={styles.title}>都道府県</div>
          {address}
        </div>
        <div>
          <div className={styles.title}>就学状況</div>
          {education}
        </div>
        <div>
          <div className={styles.title}>学校区分</div>
          {schoolType}
        </div>
        <div>
          <div className={styles.title}>学校名</div>
          {schoolName}
        </div>
        <div>
          <div className={styles.title}>学部・学科</div>
          {academicDiscipline}
        </div>
        <div>
          <div className={styles.title}>一番よくやるゲーム</div>
          {favoriteGame}
        </div>

        <div>{birthday ? new Date(birthday).toLocaleDateString() : 'No birthday set'}</div>
      </div>
    </div>
  );
};

export default ProfileDetail;
