import { TextField } from '@mui/material';
import type { SkillPr } from 'commonTypesWithClient/models';
import React, { useEffect, useState } from 'react';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  const [skill1, setSkill1] = useState('');
  const [skill2, setSkill2] = useState('');
  const [skill3, setSkill3] = useState('');
  const [selfPr, setSelfPr] = useState('');
  const [edit, setEdit] = useState(false);

  const updateUserSkillPr = async () => {
    const userSkillPr: SkillPr = {
      userid: 'dammy',
      skill1,
      skill2,
      skill3,
      selfPr,
    };
    await apiClient.skillpr.post({ body: userSkillPr });
  };

  const setUserSkillPr = async () => {
    const userSkillPrs = await apiClient.skillpr.get();
    setSkill1(userSkillPrs.body?.skill1 ?? '');
    setSkill2(userSkillPrs.body?.skill2 ?? '');
    setSkill3(userSkillPrs.body?.skill3 ?? '');
    setSelfPr(userSkillPrs.body?.selfPr ?? '');
  };

  useEffect(() => {
    setUserSkillPr();
  }, []);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = () => {
    updateUserSkillPr();
    setEdit(false);
  };

  return (
    <>
      {edit ? (
        <div>
          <div>
            <div className={styles.header}>スキルPR</div>

            <div id="separated">
              <div className={styles.title}>特技PR(スキル、実績、経験など)</div>
              <div>20文字以内、最大3つまで</div>
              <div>
                <TextField
                  label="1"
                  variant="outlined"
                  value={skill1}
                  onChange={(e) => setSkill1(e.target.value)}
                  style={{ margin: '16px 32px' }}
                />
                <TextField
                  label="2"
                  variant="outlined"
                  value={skill2}
                  onChange={(e) => setSkill2(e.target.value)}
                  style={{ margin: '16px 32px' }}
                />
                <TextField
                  label="3 "
                  variant="outlined"
                  value={skill3}
                  onChange={(e) => setSkill3(e.target.value)}
                  style={{ margin: '16px 32px' }}
                />
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
                  value={selfPr}
                  onChange={(e) => setSelfPr(e.target.value)}
                  style={{
                    width: '600px',
                    height: '200px',
                    backgroundColor: '#f3f3f3',
                    borderRadius: '10px',
                    margin: '10px',
                  }}
                />
              </div>
              <button type="button" className={styles.edit} onClick={handleSaveClick}>
                編集
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.header}>スキルPR</div>
            <div id="separated" className={styles.detail}>
              <div className={styles.bigtitle}>
                スキルPR
                <button type="button" className={styles.edit} onClick={handleEditClick}>
                  編集
                </button>
              </div>
              <div className={styles.title}>特技PR(スキル、実績、経験など)</div>
              <div style={{ color: 'gray', marginLeft: 10 }}>＊20文字以内、最大3つまで</div>
              <div>
                <div className={styles.skill}>・{skill1}</div>
                <div className={styles.skill}>・{skill2}</div>
                <div className={styles.skill}>・{skill3}</div>
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
                  value={selfPr}
                  readOnly
                  style={{
                    width: '600px',
                    height: '200px',
                    backgroundColor: '#f3f3f3',
                    borderRadius: '10px',
                    padding: '10px',
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
