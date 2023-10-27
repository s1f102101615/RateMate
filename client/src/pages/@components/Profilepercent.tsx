import React from 'react';

interface ProfilePercentProps {
  percentage: number;
}

const ProfilePercent: React.FC<ProfilePercentProps> = ({ percentage }) => {
  const barStyle = {
    width: `${percentage}%`,
    backgroundColor: 'green',
    borderRadius: '10px',
    height: '100%',
  };

  const topbox: React.CSSProperties = {
    width: '855px',
    height: '135px',
    boxShadow: '0px 0px 5px #c9c9c9',
    borderRadius: 5,
    flexDirection: 'row',
    marginBottom: '7px',
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    marginLeft: '20px',
    marginTop: '10px',
  };

  const handleEditProfile = () => {
    console.log('プロフィールを編集');
  };

  return (
    <div className="profile-percent" style={topbox}>
      <div style={{ fontSize: 22, fontWeight: 'bold', marginLeft: '17px', paddingTop: '15px' }}>
        プロフィールを登録して、オファーをゲットしよう！
      </div>
      <div
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          display: 'flex',
          marginTop: '15px',
        }}
      >
        <div style={{ width: '100%' }}>
          <div style={{ flexDirection: 'row', display: 'flex', gap: 180 }}>
            <button style={buttonStyle} onClick={handleEditProfile}>
              スキルを登録しよう
            </button>
            <div style={{ flexDirection: 'column', display: 'flex', marginTop: 4 }}>
              <div style={{ flexDirection: 'row', display: 'flex', gap: '20px' }}>
                <div className="percentage">プロフィール入力率</div>
                <div className="percentage">{percentage}%完了</div>
              </div>
              <div>
                <div
                  style={{
                    width: 450,
                    height: 20,
                    backgroundColor: '#e2e2e2',
                    borderRadius: '10px',
                    border: '1px solid gray',
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
