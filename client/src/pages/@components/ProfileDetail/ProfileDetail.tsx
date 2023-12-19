/* eslint-disable complexity */
/* eslint-disable max-lines */
import { FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import type { UserInfo } from 'commonTypesWithClient/models';
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
  const [birthday, setBirthday] = useState<Date>();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [edit, setEdit] = useState(false);
  const [predictions, setPredictions] = useState<string[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const userdata = await apiClient.userinfo.get();
      setGender(userdata.body?.gender ?? '');
      setAddress(userdata.body?.address ?? '');
      setEducation(userdata.body?.education ?? '');
      setSchoolType(userdata.body?.schoolType ?? '');
      setSchoolName(userdata.body?.schoolName ?? '');
      setBirthday(userdata.body?.birthday);
      setAcademicDiscipline(userdata.body?.academicDiscipline ?? '');
      setFavoriteGame(userdata.body?.favoriteGame ?? '');
      setFirstName(userdata.body?.firstName ?? '');
      setLastName(userdata.body?.lastName ?? '');
    };
    fetch();
  }, []);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = async () => {
    const userinfoupdate: UserInfo = {
      userId: 'dammy',
      birthday: birthday ?? new Date(),
      address,
      gender,
      education,
      schoolType,
      schoolName,
      academicDiscipline,
      favoriteGame,
      createdAt: new Date(),
      firstName,
      lastName,
    };
    await apiClient.userinfo.post({ body: userinfoupdate });
    setEdit(false);
  };

  const handlelastNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setLastName(event.target.value);
  };

  const handlefirstNameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setFirstName(event.target.value);
  };

  const handleGenderChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setGender(event.target.value);
  };

  const handleAddressChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setAddress(event.target.value);
  };

  const handleEducationChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setEducation(event.target.value);
  };

  const handleBirthdayChange = (event: { target: { value: string } }) => {
    setBirthday(new Date(`${event.target.value}T00:00:00.000Z`));
  };

  const handleAcademicDisciplineChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setAcademicDiscipline(event.target.value);
  };

  const handleSchoolTypeChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSchoolType(event.target.value);
  };

  const handleSchoolName = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSchoolName(event.target.value);
  };

  const handleFavoriteGameChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setFavoriteGame(event.target.value);
  };

  useEffect(() => {
    // 仮の大学名のリスト（実際にはAPIからデータを取得するなどが必要）
    const universityList = [
      'ハーバード大学',
      '大阪大学',
      '東京大学',
      '東洋大学',
      'サンシャイン大学',
      'プロ鵜戸大学',
    ];

    // 入力値に基づいて予測を生成
    let filteredPredictions = universityList;
    filteredPredictions = universityList.filter((university) =>
      university.toLowerCase().includes(schoolName.toLowerCase())
    );
    if (schoolName.trim() === '') {
      filteredPredictions = [];
    }
    setPredictions(filteredPredictions);
  }, [schoolName]);

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
    <>
      {edit ? (
        <div>
          <div>
            <div className={styles.header}>名前・プロフィール変更</div>

            <div id="separated">
              <div className={styles.title}>名前</div>
              <div>
                <TextField
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={lastName}
                  label="姓"
                  onChange={handlelastNameChange}
                />
                <TextField
                  variant="outlined"
                  label="名"
                  style={{ margin: '16px 32px' }}
                  value={firstName}
                  onChange={handlefirstNameChange}
                />
              </div>
            </div>

            <div>
              <div className={styles.title}>性別</div>
              <RadioGroup
                row
                defaultValue={gender}
                className={styles.gender}
                onChange={handleGenderChange}
              >
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
                defaultValue={birthday ? new Date(birthday).toISOString().split('T')[0] : ''}
                onChange={handleBirthdayChange}
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ margin: '16px' }}
              />
            </div>

            <div>
              <div className={styles.title}>都道府県</div>
              {/* <select id="address" name="address" value={address} onChange={handleAddressChange}> */}
              <select
                id="address"
                name="address"
                style={{ margin: 12 }}
                value={address}
                onChange={handleAddressChange}
              >
                <option value="" disabled>
                  選択してください
                </option>
                <option value="北海道">北海道</option>
                <option value="青森県">青森県</option>
                <option value="岩手県">岩手県</option>
                <option value="宮城県">宮城県</option>
                <option value="秋田県">秋田県</option>
                <option value="山形県">山形県</option>
                <option value="福島県">福島県</option>
                <option value="茨城県">茨城県</option>
                <option value="栃木県">栃木県</option>
                <option value="群馬県">群馬県</option>
                <option value="埼玉県">埼玉県</option>
                <option value="千葉県">千葉県</option>
                <option value="東京都">東京都</option>
                <option value="神奈川県">神奈川県</option>
                <option value="新潟県">新潟県</option>
                <option value="富山県">富山県</option>
                <option value="石川県">石川県</option>
                <option value="福井県">福井県</option>
                <option value="山梨県">山梨県</option>
                <option value="長野県">長野県</option>
                <option value="岐阜県">岐阜県</option>
                <option value="静岡県">静岡県</option>
                <option value="愛知県">愛知県</option>
                <option value="三重県">三重県</option>
                <option value="滋賀県">滋賀県</option>
                <option value="京都府">京都府</option>
                <option value="大阪府">大阪府</option>
                <option value="兵庫県">兵庫県</option>
                <option value="奈良県">奈良県</option>
                <option value="和歌山県">和歌山県</option>
                <option value="鳥取県">鳥取県</option>
                <option value="島根県">島根県</option>
                <option value="岡山県">岡山県</option>
                <option value="広島県">広島県</option>
                <option value="山口県">山口県</option>
                <option value="徳島県">徳島県</option>
                <option value="香川県">香川県</option>
                <option value="愛媛県">愛媛県</option>
                <option value="高知県">高知県</option>
                <option value="福岡県">福岡県</option>
                <option value="佐賀県">佐賀県</option>
                <option value="長崎県">長崎県</option>
                <option value="熊本県">熊本県</option>
                <option value="大分県">大分県</option>
                <option value="宮崎県">宮崎県</option>
                <option value="鹿児島県">鹿児島県</option>
                <option value="沖縄県">沖縄県</option>
              </select>
            </div>
            <div>
              <div className={styles.title}>就学状況</div>
              <TextField
                variant="outlined"
                style={{ margin: '16px 32px' }}
                label="就学状況"
                value={education}
                onChange={handleEducationChange}
              />
            </div>
            <div>
              <div className={styles.title}>学校区分</div>
              <select
                id="schooltype"
                name="schooltype"
                style={{ margin: 12 }}
                value={schoolType}
                onChange={handleSchoolTypeChange}
              >
                <option value="" disabled>
                  --
                </option>
                {schooldetail.map((detail) => (
                  <option key={detail} value={detail}>
                    {detail}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className={styles.title}>学校名</div>
              <TextField
                label={'学校名'}
                variant="outlined"
                style={{ margin: '16px 32px' }}
                value={schoolName}
                onChange={handleSchoolName}
              />
              <div>
                {predictions.map((prediction, index) => (
                  <div key={index}>{prediction}</div>
                ))}
              </div>
            </div>
            <div>
              <div className={styles.title}>学部・学科</div>
              <select
                id="academic"
                name="academic"
                style={{ margin: 12 }}
                value={academicDiscipline}
                onChange={handleAcademicDisciplineChange}
              >
                <option value="" disabled>
                  --
                </option>
                {academiclist.map((academic) => (
                  <option key={academic} value={academic}>
                    {academic}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <div className={styles.title}>一番よくやるゲーム</div>
              <TextField
                label={'一番よくやるゲーム'}
                variant="outlined"
                style={{ margin: '16px 32px' }}
                value={favoriteGame}
                onChange={handleFavoriteGameChange}
              />
            </div>
            <div>
              {/* 保存button */}
              <button type="button" className={styles.edit} onClick={handleSaveClick}>
                保存
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.header}>名前・プロフィール変更</div>
            {/* 編集を可能にするボタン */}
            <button type="button" className={styles.edit} onClick={handleEditClick}>
              編集
            </button>

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

            {/* <div>{birthday ? new Date(birthday).toLocaleDateString() : 'No birthday set'}</div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDetail;
