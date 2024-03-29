/* eslint-disable max-lines */
import { Box, List } from '@mui/material';
import { erf } from 'mathjs';
import Link from 'next/link';
function normDist(x: number): number {
  const mean = 50; // 平均値
  const stdDev = 10; // 標準偏差
  const erf = (z: number) => {
    const t = 1.0 / (1.0 + 0.5 * Math.abs(z));
    const ans =
      1 -
      t *
        Math.exp(
          -z * z -
            1.26551223 +
            t *
              (1.00002368 +
                t *
                  (0.37409196 +
                    t *
                      (0.09678418 +
                        t *
                          (-0.18628806 +
                            t *
                              (0.27886807 +
                                t *
                                  (-1.13520398 +
                                    t * (1.48851587 + t * (-0.82215223 + t * 0.17087277))))))))
        );
    return z >= 0 ? ans : -ans;
  };
  const z = (x - mean) / (stdDev * Math.sqrt(2));
  return (1 + erf(z)) / 2;
}
function ScoreBackground({ score }: { score: number }) {
  const mean = 50; // 偏差値の平均
  const stdDev = 10; // 偏差値の標準偏差

  // 正規分布のCDFを計算
  const cdf = 0.5 * (1 + erf((score - mean) / (stdDev * Math.sqrt(2))));
  const calculatedHeight = `${cdf * 85}%`;

  const styles = `
  @keyframes riseFromBottom {
    0% { bottom: -100%; }
    100% { bottom: 0; }
  }
`;

  return (
    <Box
      position="relative"
      width="180px"
      height="180px"
      overflow="hidden"
      bgcolor="#e0e0e0"
      borderRadius="50%"
      border={2}
    >
      <style>{styles}</style>
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        height={calculatedHeight}
        bgcolor="primary.main"
        style={{
          animation: 'riseFromBottom 2s forwards',
        }}
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        style={{ transform: 'translate(-50%, -50%)' }}
        color="white"
        fontSize="40px"
      >
        {score}
      </Box>
    </Box>
  );
}

export default function Deviation() {
  const scores = {
    ApexLegends: 32.0,
    LeagueOfLegends: 60.0,
    Valorant: 58.0,
    Shadowverse: 75.0,
  };

  const highestScore = Math.max(...Object.values(scores));
  return (
    <Box
      // height={410}
      // width={540}
      width={420}
      height={300}
      padding={2}
      margin={'5px'}
      style={{ boxShadow: '0px 0px 5px #c9c9c9', borderRadius: 5 }}
      bgcolor="white"
    >
      <div style={{ textAlign: 'center', fontSize: 23, marginBottom: 20 }}>
        <span style={{ fontWeight: 'bold' }}>ゲームレート</span>
      </div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <div style={{ paddingRight: '20px' }}>
          <ScoreBackground score={highestScore} />
        </div>

        <List>
          {Object.entries(scores).map(([skill, score]) => (
            // <ListItemText
            //   primary={`${skill} ${score}`}
            //   secondary={`上位 ${Math.round((1 - normDist(score)) * 100)}%`}
            // />
            <div
              key={skill}
              style={{
                backgroundColor: '#ececec',
                marginBottom: 5,
                padding: '1px 20px',
                borderRadius: 15,
                fontSize: 13,
                width: 194,
              }}
            >
              <div>
                {skill} <span style={{ color: 'blue' }}>{score}</span>
              </div>
              <div style={{ color: '#777777', fontSize: 11 }}>
                上位 {Math.round((1 - normDist(score)) * 100)}%
              </div>
            </div>
          ))}
        </List>
      </Box>
      <div
        style={{
          marginTop: 20,
          justifyContent: 'right',
          display: 'flex',
          fontSize: 12,
          color: 'gray',
        }}
      >
        最終更新日時: 2023-10-24 20:59
        <Link href="../mypage/account">
          <div style={{ color: 'black', marginLeft: 10, fontWeight: 'bold' }}>Re:再連携</div>
        </Link>
      </div>
    </Box>
  );
}

export function Popularjobs() {
  const occupations = [
    'ゲームクリエイター',
    'ゲームプログラマー',
    'ゲームデザイナー',
    'ゲームプランナー',
    'ゲームディレクター',
    'ゲームプロデューサー',
    'ゲームデバッガー',
    'ゲームテスター',
    'ゲームマーケター',
    'ゲームコンサルタント',
    'ゲームライター',
    'ゲームイベントプランナー',
    'ゲームイラストレーター',
    'ゲームキャラクターデザイナー',
    'ゲームシナリオライター',
    'ゲーム音楽家',
    'ゲーム声優',
    'ゲームモーションキャプ',
  ];

  const popularJobs = [
    { title: '求人1求人1求人1求人1', image: '画像URL1' },
    { title: '求人2求人1求人1求人1', image: '画像URL2' },
    { title: '求人3求人1求人1求人1', image: '画像URL3' },
    { title: '求人3求人1求人1求人1', image: '画像URL3' },
    { title: '求人3求人1求人1求人1', image: '画像URL3' },
  ];

  return (
    <Box
      width={420}
      height={300}
      padding={2}
      margin={'5px'}
      style={{ boxShadow: '0px 0px 5px #c9c9c9', borderRadius: 5 }}
      bgcolor="white"
    >
      <div style={{ fontSize: 19, fontWeight: 600 }}>人気の求人</div>
      {popularJobs.map((job, index) => (
        <div
          key={index}
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #e0e0e0',
            margin: '5px',
            fontSize: 20,
            gap: 10,
            height: 38.5,
          }}
        >
          {/* <img src={job.image} alt={job.title} /> */}
          <div style={{ width: 20, height: 20, backgroundColor: 'black' }} />
          <div>{job.title}</div>
        </div>
      ))}
      <Link
        href=""
        style={{ justifyContent: 'right', width: '100%', display: 'flex', paddingRight: 10 }}
      >
        すべてみる{'>'}
      </Link>
    </Box>
  );
}

export function RecommendedOccuoations() {
  const occupations = ['ゲームクリエイター', 'ゲームプログラマー', 'ゲームデザイナー'];
  return (
    <Box
      width={420}
      height={300}
      padding={2}
      margin={'5px'}
      style={{ boxShadow: '0px 0px 5px #c9c9c9', borderRadius: 5 }}
      bgcolor="white"
    >
      <div style={{ fontSize: 19, fontWeight: 600 }}>おすすめ職種</div>
      <div style={{ color: 'grey', fontSize: 15 }}>*追加を押して希望職種に追加しましょう</div>
      {occupations.map((occupation, index) => (
        <div
          key={index}
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #e0e0e0',
            margin: '11px',
            fontSize: 20,
            gap: 10,
            height: 50,
          }}
        >
          <div>
            {index + 1}位: {occupation}
          </div>
          <div>追加</div>
        </div>
      ))}
      <Link
        href=""
        style={{ justifyContent: 'right', width: '100%', display: 'flex', paddingRight: 10 }}
      >
        もっと詳しく{'>'}
      </Link>
    </Box>
  );
}
