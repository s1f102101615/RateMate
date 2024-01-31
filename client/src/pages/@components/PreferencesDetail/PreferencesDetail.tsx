/* eslint-disable max-lines */
/* eslint-disable complexity */
import { TextField } from '@mui/material';
import type { Preference } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import React, { useEffect } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [edit, setEdit] = React.useState(false);
  const [companySelection, setCompanySelection] = React.useState<string[]>([]);
  const [companySelectionType, setCompanySelectionType] = React.useState<string[]>([]);
  const [preferredLocations, setPreferredLocations] = React.useState<string[]>([]);
  const [preferredDetail, setPreferredDetail] = React.useState<string>('');

  const updateUserPreference = async () => {
    const userPreference: Preference = {
      userid: 'user123', // dammy
      companySelection,
      companySelectionType,
      preferredLocations,
      preferredDetail,
    };
    await apiClient.preference.post({ body: userPreference });
  };

  const setUserPreference = async () => {
    const userPreference = await apiClient.preference.get();
    setCompanySelection(userPreference.body?.companySelection ?? []);
    setCompanySelectionType(userPreference.body?.companySelectionType ?? []);
    setPreferredLocations(userPreference.body?.preferredLocations ?? []);
    setPreferredDetail(userPreference.body?.preferredDetail ?? '');
    console.log('u', userPreference);
  };

  useEffect(() => {
    setUserPreference();
  }, []);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = () => {
    updateUserPreference();
    setEdit(false);
  };

  const handleChange = (index: number, value: string) => {
    setCompanySelection((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };

  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>, index: string) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCompanySelectionType((prevItems) => [...prevItems, index]);
    } else {
      setCompanySelectionType((prevItems) => prevItems.filter((item) => item !== index));
    }
  };

  const handleLocateChange = (index: number, value: string) => {
    const newValues = [...preferredLocations];
    newValues[index] = value;
    setPreferredLocations(newValues);
  };
  return (
    <>
      {edit ? (
        <div>
          <div>
            <div className={styles.header}>希望条件</div>
            <div>
              転職（就職）時の希望条件を入力します。応募時や、企業がスカウトを送る際の判断材料に
              <br />
              なるほか、条件に一致した求人があればメールでお知らせします。
            </div>

            <div id="separated">
              <div className={styles.title}>企業選びで重視する事(3つまで)</div>
              <div>
                <TextField
                  label="1"
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={companySelection[0]}
                  onChange={(event) => handleChange(0, event.target.value)}
                />
                <TextField
                  label="2"
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={companySelection[1]}
                  onChange={(event) => handleChange(1, event.target.value)}
                />
                <TextField
                  label="3"
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={companySelection[2]}
                  onChange={(event) => handleChange(2, event.target.value)}
                />
              </div>
              <div>
                <div className={styles.title}>志望企業のタイプ</div>
                {/* チェックボックス */}
                <div style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input
                      type="checkbox"
                      id="paper"
                      name="paper"
                      checked={companySelectionType.includes('大手企業')}
                      onChange={(event) => handleTypeChange(event, '大手企業')}
                    />
                    <div>大手企業</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input
                      type="checkbox"
                      id="paper"
                      name="paper"
                      checked={companySelectionType.includes('中小企業')}
                      onChange={(event) => handleTypeChange(event, '中小企業')}
                    />
                    <div>中小企業</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input
                      type="checkbox"
                      id="paper"
                      name="paper"
                      checked={companySelectionType.includes('メガベンチャー(500名以上～)')}
                      onChange={(event) => handleTypeChange(event, 'メガベンチャー(500名以上～)')}
                    />
                    <div>メガベンチャー(500名以上～)</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input
                      type="checkbox"
                      id="paper"
                      name="paper"
                      checked={companySelectionType.includes('ベンチャー企業')}
                      onChange={(event) => handleTypeChange(event, 'ベンチャー企業')}
                    />
                    <div>ベンチャー企業</div>
                  </div>
                </div>
              </div>
              <div className={styles.title}>希望勤務地(複数選択可)</div>
              <div>
                <TextField
                  label="1"
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={preferredLocations[0]}
                  onChange={(event) => handleLocateChange(0, event.target.value)}
                />
                <TextField
                  label="2"
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={preferredLocations[1]}
                  onChange={(event) => handleLocateChange(1, event.target.value)}
                />
                <TextField
                  label="3"
                  variant="outlined"
                  style={{ margin: '16px 32px' }}
                  value={preferredLocations[2]}
                  onChange={(event) => handleLocateChange(2, event.target.value)}
                />
              </div>
              <div className={styles.title}>希望詳細/その他</div>
              <div>
                {/* テキストエリア */}
                <textarea
                  value={preferredDetail}
                  onChange={(e) => setPreferredDetail(e.target.value)}
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
          <button type="button" className={styles.edit} onClick={handleSaveClick}>
            保存
          </button>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.header}>希望条件</div>

            <div className={styles.detail}>
              <div className={styles.bigtitle}>
                希望条件{' '}
                <button type="button" className={styles.edit} onClick={handleEditClick}>
                  編集
                </button>
              </div>
              <div>
                転職（就職）時の希望条件を入力します。応募時や、企業がスカウトを送る際の <br />
                判断材料に なるほか、条件に一致した求人があればメールでお知らせします。
              </div>

              <div id="separated">
                <div className={styles.title}>企業選びで重視する事(3つまで)</div>
                <div>
                  <div className={styles.preferences}>・{companySelection[0] || '未記入'}</div>
                  <div className={styles.preferences}>・{companySelection[1] || '未記入'}</div>
                  <div className={styles.preferences}>・{companySelection[2] || '未記入'}</div>
                </div>
                <div>
                  <div className={styles.title}>志望企業のタイプ</div>
                  {/* チェックボックス */}
                  <div
                    style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}
                  >
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <input
                        type="checkbox"
                        id="paper"
                        name="paper"
                        checked={companySelectionType.includes('大手企業')}
                      />
                      <div>大手企業</div>
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <input
                        type="checkbox"
                        id="paper"
                        name="paper"
                        checked={companySelectionType.includes('中小企業')}
                      />
                      <div>中小企業</div>
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <input
                        type="checkbox"
                        id="paper"
                        name="paper"
                        checked={companySelectionType.includes('メガベンチャー(500名以上～)')}
                      />
                      <div>メガベンチャー(500名以上～)</div>
                    </div>
                    <div style={{ flexDirection: 'row', display: 'flex' }}>
                      <input
                        type="checkbox"
                        id="paper"
                        name="paper"
                        checked={companySelectionType.includes('ベンチャー企業')}
                      />
                      <div>ベンチャー企業</div>
                    </div>
                  </div>
                </div>
                <div className={styles.title}>希望勤務地(複数選択可)</div>
                <div>
                  {preferredLocations.map((location, index) => (
                    <p key={index}>{location}</p>
                  ))}
                </div>
                {preferredLocations.length === 0 && (
                  <div className={styles.preferences}>・未記入</div>
                )}
                <div className={styles.title}>希望詳細/その他</div>
                <div>
                  {/* テキストエリア */}
                  <textarea
                    value={preferredDetail}
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
        </div>
      )}
    </>
  );
};

export default ProfileDetail;
