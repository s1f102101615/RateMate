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
  const [LargeCompany, setLargeCompany] = React.useState<boolean>(false);
  const [MediumCompany, setMediumCompany] = React.useState<boolean>(false);
  const [MegaVenture, setMegaVenture] = React.useState<boolean>(false);
  const [Venture, setVenture] = React.useState<boolean>(false);

  const updateUserPreference = async () => {
    const userPreference: Preference = {
      userid: 'user123', // dammy
      companySelection: ['company1', 'company2', 'company3'],
      companySelectionType: ['companyType1', 'companyType2', 'companyType3', 'companyType4'],
      preferredLocations: ['location1', 'location2', 'location3'],
      preferredDetail: 'details',
    };
    await apiClient.preference.post({ body: userPreference });
  };

  const setUserPreference = async () => {
    const userPreference = await apiClient.preference.get();
    setCompanySelection(userPreference.body?.companySelection ?? []);
    setCompanySelectionType(userPreference.body?.companySelectionType ?? []);
    setLargeCompany(userPreference.body?.companySelectionType?.includes('大手企業') ?? false);
    setMediumCompany(userPreference.body?.companySelectionType?.includes('中小企業') ?? false);
    setMegaVenture(
      userPreference.body?.companySelectionType?.includes('メガベンチャー(500名以上～)') ?? false
    );
    setVenture(userPreference.body?.companySelectionType?.includes('ベンチャー企業') ?? false);
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
                <TextField label="姓" variant="outlined" style={{ margin: '16px 32px' }} />
                <TextField label="名" variant="outlined" style={{ margin: '16px 32px' }} />
              </div>
              <div>
                <div className={styles.title}>志望企業のタイプ</div>
                {/* チェックボックス */}
                <div style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" />
                    <div>大手企業</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" />
                    <div>中小企業</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" />
                    <div>メガベンチャー(500名以上～)</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" />
                    <div>ベンチャー企業</div>
                  </div>
                </div>
              </div>
              <div className={styles.title}>希望勤務地(複数選択可)</div>
              <div>
                <TextField label="姓" variant="outlined" style={{ margin: '16px 32px' }} />
                <TextField label="名" variant="outlined" style={{ margin: '16px 32px' }} />
              </div>
              <div className={styles.title}>希望詳細/その他</div>
              <div>
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
          <button type="button" className={styles.edit} onClick={handleSaveClick}>
            保存
          </button>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.header}>希望条件</div>
            <button type="button" className={styles.edit} onClick={handleEditClick}>
              編集
            </button>
            <div>
              転職（就職）時の希望条件を入力します。応募時や、企業がスカウトを送る際の判断材料に
              <br />
              なるほか、条件に一致した求人があればメールでお知らせします。
            </div>

            <div id="separated">
              <div className={styles.title}>企業選びで重視する事(3つまで)</div>
              <div>
                <div>{companySelection[0]}</div>
                <div>{companySelection[1]}</div>
                <div>{companySelection[2]}</div>
              </div>
              <div>
                <div className={styles.title}>志望企業のタイプ</div>
                {/* チェックボックス */}
                <div style={{ flexDirection: 'column', display: 'flex', gap: 10, marginLeft: 30 }}>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" checked={LargeCompany} />
                    <div>大手企業</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" checked={MediumCompany} />
                    <div>中小企業</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" checked={MegaVenture} />
                    <div>メガベンチャー(500名以上～)</div>
                  </div>
                  <div style={{ flexDirection: 'row', display: 'flex' }}>
                    <input type="checkbox" id="paper" name="paper" checked={Venture} />
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
      )}
    </>
  );
};

export default ProfileDetail;
