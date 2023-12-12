/* eslint-disable max-lines */
/* eslint-disable complexity */
import { TextField } from '@mui/material';
import type { Experience } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import { userAtom } from 'src/atoms/user';
import { apiClient } from 'src/utils/apiClient';
import styles from './index.module.css';

const ProfileDetail: React.FC = () => {
  const [user] = useAtom(userAtom);
  const [theme, setTheme] = React.useState('');
  const [reseatchdetails, setReseatchdetails] = React.useState('');
  const [achievements, setAchievements] = React.useState('');
  const [awards, setAwards] = React.useState('');
  const [paper, setPaper] = React.useState('');
  const [presentation, setPresentation] = React.useState('');
  const [achievement, setAchievement] = React.useState('');
  const [competitiondetails, setCompetitiondetails] = React.useState('');
  const [internship, setInternship] = useState(false);
  const [partTimeJob, setPartTimeJob] = useState(false);
  const [workExperienceDetails, setWorkExperienceDetails] = useState('');
  const [edit, setEdit] = React.useState(false);

  const updateUserExperience = async () => {
    const userExperience: Experience = {
      userid: 'user123', // dammy
      research: {
        userid: 'user123',
        theme,
        details: reseatchdetails,
        achievements,
        awards,
        paper,
        presentation,
      },
      competition: {
        userid: 'user123',
        achievement,
        details: competitiondetails,
      },
      workExperience: {
        userid: 'user123',
        internship,
        partTimeJob,
        details: workExperienceDetails,
      },
    };
    await apiClient.experience.post({ body: userExperience });
  };

  const setUserExperience = async () => {
    const userExperience = await apiClient.experience.get();
    setTheme(userExperience.body?.research?.theme ?? '');
    setReseatchdetails(userExperience.body?.research?.details ?? '');
    setAchievements(userExperience.body?.research?.achievements ?? '');
    setAwards(userExperience.body?.research?.awards ?? '');
    setPaper(userExperience.body?.research?.paper ?? '');
    setPresentation(userExperience.body?.research?.presentation ?? '');
    setAchievement(userExperience.body?.competition?.achievement ?? '');
    setCompetitiondetails(userExperience.body?.competition?.details ?? '');
    setInternship(userExperience.body?.experience?.internship ?? false);
    setPartTimeJob(userExperience.body?.experience?.partTimeJob ?? false);
    setWorkExperienceDetails(userExperience.body?.experience?.details ?? '');
  };

  useEffect(() => {
    setUserExperience();
  }, []);

  const handleEditClick = () => {
    setEdit(true);
  };

  const handleSaveClick = () => {
    updateUserExperience();
    setEdit(false);
  };

  return (
    <>
      {edit ? (
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
              <TextField
                label=""
                variant="outlined"
                style={{ margin: '16px 32px' }}
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
              <div>・研究詳細</div>
              <TextField
                label=""
                variant="outlined"
                style={{ margin: '16px 32px' }}
                value={reseatchdetails}
                onChange={(e) => setReseatchdetails(e.target.value)}
              />
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
                value={achievements}
                onChange={(e) => setAchievements(e.target.value)}
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
                value={workExperienceDetails}
                onChange={(e) => setWorkExperienceDetails(e.target.value)}
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

          <button type="button" className={styles.edit} onClick={handleSaveClick}>
            編集
          </button>
        </div>
      ) : (
        <div>
          <div>
            <div className={styles.header}>経歴情報</div>
            <button type="button" className={styles.edit} onClick={handleEditClick}>
              編集
            </button>
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
              <div>{theme}</div>
              <div>・研究詳細</div>
              <div>{reseatchdetails}</div>
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
                value={achievements}
                readOnly
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
                value={awards}
                readOnly
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
                  <input type="checkbox" id="paper" name="paper" defaultChecked={internship} />
                  <div>インターン経験がある</div>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex' }}>
                  <input type="checkbox" id="paper" name="paper" defaultChecked={partTimeJob} />
                  <div>アルバイト経験がある</div>
                </div>
              </div>

              <div>・インターン・アルバイト経験詳細</div>
              {/* テキストエリア */}
              <textarea
                value={workExperienceDetails}
                readOnly
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
      )}
    </>
  );
};

export default ProfileDetail;
