import React from 'react';

interface ProfilePercentProps {
  percentage: number;
}

const ProfilePercent: React.FC<ProfilePercentProps> = ({ percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: '#14f100',
    borderRadius: '10px',
    height: '100%',
  };

  const topbox: React.CSSProperties = {
    width: '855px',
    height: '120px',
    boxShadow: '0px 0px 5px #c9c9c9',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: '7px',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: 'blue',
    padding: '8px 18px',
    borderRadius: '5px',
    border: 'blue 1px solid',
    cursor: 'pointer',
    fontSize: '14px',
    marginLeft: '20px',
    marginTop: '10px',
  };

  const handleEditProfile = () => {
    console.log('プロフィールを編集');
  };

  return (
    <div className="profile-percent" style={topbox}>
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginLeft: '17px',
          paddingTop: '15px',
          letterSpacing: '0',
        }}
      >
        プロフィールを登録して、オファーをゲットしよう！
      </div>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          display: 'flex',
          marginTop: '5px',
        }}
      >
        <div style={{ width: '100%' }}>
          <div style={{ flexDirection: 'row', display: 'flex', gap: 250 }}>
            <button style={buttonStyle} onClick={handleEditProfile}>
              レートを登録しよう
            </button>
            <div style={{ flexDirection: 'column', display: 'flex', marginTop: 12 }}>
              <div style={{ flexDirection: 'row', display: 'flex', gap: '20px', marginBottom: 5 }}>
                <div
                  className="percentage"
                  style={{ fontSize: 14, letterSpacing: '0', fontWeight: 700 }}
                >
                  プロフィール入力率
                </div>
                <div className="percentage" style={{ fontSize: 14 }}>
                  {percentage}%完了
                </div>
              </div>
              <div>
                <div
                  style={{
                    width: 390,
                    height: 15,
                    backgroundColor: '#f0f0f0',
                    borderRadius: '10px',
                    border: '1px solid #b6b6b6',
                  }}
                >
                  <div className="progress" style={barStyle} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePercent;
