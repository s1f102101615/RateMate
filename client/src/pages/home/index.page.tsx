import { Button, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  const [data, setData] = useState([
    { ability: 'AIM', A: 120, B: 110, fullMark: 150 },
    { ability: '集中力', A: 98, B: 130, fullMark: 150 },
    { ability: '統率力', A: 86, B: 130, fullMark: 150 },
    { ability: '継続力', A: 99, B: 100, fullMark: 150 },
    { ability: 'わからん', A: 85, B: 90, fullMark: 150 },
    { ability: 'ほげ', A: 65, B: 85, fullMark: 150 },
  ]);
  const [limit, setLimit] = useState(5); // 新しいstate変数

  const router = useRouter();
  if (!user || createAuth().currentUser?.emailVerified === false) {
    router.push('../');
    return null;
  }

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
    <div>
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
            marginLeft: '30px',
          }}
        >
          <div style={{ backgroundColor: '#c5c5c5', height: 70, width: 605, textAlign: 'center' }}>
            <Link href="/search">
              <Button
                style={{ textAlign: 'center' }}
                variant="contained"
                color="primary"
                size="large"
              >
                企業を探す
              </Button>
            </Link>
          </div>
          <div
            style={{
              padding: '20px',
              backgroundColor: '#f1f1f1',
              overflowY: 'scroll',
              height: 730,
              width: 605,
            }}
            className={styles.scrollbar}
          >
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
                  height="120px"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
