import { Paper, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import type { ChangeEvent } from 'react';
import { useState } from 'react';
import { BasicHeader } from 'src/pages/@components/BasicHeader/BasicHeader';
import { createAuth } from 'src/utils/firebase';
import { userAtom } from '../../atoms/user';
import Chart from '../@components/Chart';
import Deviation from '../@components/Deviation';
import OfferList from '../@components/OfferList';
import ProfilePercent from '../@components/Profilepercent';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  const [label, setLabel] = useState('');
  const [data, setData] = useState([
    { ability: 'AIM', A: 120, B: 110, fullMark: 150 },
    { ability: '集中力', A: 98, B: 130, fullMark: 150 },
    { ability: '統率力', A: 86, B: 130, fullMark: 150 },
    { ability: '継続力', A: 99, B: 100, fullMark: 150 },
    { ability: 'わからん', A: 85, B: 90, fullMark: 150 },
    { ability: 'ほげ', A: 65, B: 85, fullMark: 150 },
  ]);
  const [limit, setLimit] = useState(2); // 新しいstate変数

  const router = useRouter();
  if (!user | (createAuth().currentUser?.emailVerified === false)) {
    router.push('../');
    return null;
  }

  const inputLabel = (e: ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const Data = {
    companyName: '株式会社ほげんぽつ',
    description: 'めちゃくちゃブラック企業です！非推奨',
  };

  const n = 10;

  const offerData = Array.from({ length: n }, (_, i) => ({
    companyName: `${Data.companyName} ${i + 1}`,
    description: `${Data.description} ${i + 1}`,
  }));

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  return (
    <>
      <BasicHeader user={user} />
      <div className={styles.topbar}>
        <ProfilePercent percentage={10} />
      </div>
      <div className={styles.rowdetail}>
        <div className={styles.columndetail}>
          <Deviation />

          <Chart data={data} width={500} height={500} outerRadius={200} />

          <div />
        </div>
        <div
          style={{
            width: '600px',
            height: '850px',
            backgroundColor: 'gray',
            borderWidth: '2px',
            borderColor: 'green',
            borderStyle: 'solid',
            marginLeft: '30px',
          }}
        >
          <Paper elevation={3} style={{ padding: '20px' }}>
            {offerData.slice(0, limit).map(
              (
                news,
                index // .sliceを追加
              ) => (
                <OfferList
                  key={index}
                  companyName={news.companyName}
                  description={news.description}
                  width="555px"
                  height="80%"
                />
              )
            )}
            <Typography
              style={{ textAlign: 'right' }}
              onClick={handleShowMore}
              padding="5px"
              color="primary.main"
              fontWeight="bold"
            >
              もっと見る
            </Typography>
          </Paper>
        </div>
      </div>
    </>
  );
};

export default Home;
