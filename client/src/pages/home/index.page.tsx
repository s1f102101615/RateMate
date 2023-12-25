import type { OfferStatus } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeaderLogined } from 'src/pages/@components/BasicHeaderLogined/BasicHeaderLogined';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../../atoms/user';
import Chart from '../@components/Chart';
import Deviation from '../@components/Deviation';
import OfferList from '../@components/OfferList';
import ProfilePercent from '../@components/Profilepercent';
import useAuthRedirect from '../@hooks/useAuthRedirect';
import styles from './index.module.css';

const Home = () => {
  const [user] = useAtom(userAtom);
  useAuthRedirect();
  const [data, setData] = useState([
    { ability: 'AIM', A: 120, B: 110, fullMark: 150 },
    { ability: '集中力', A: 98, B: 130, fullMark: 150 },
    { ability: '統率力', A: 86, B: 130, fullMark: 150 },
    { ability: '継続力', A: 99, B: 100, fullMark: 150 },
    { ability: 'わからん', A: 85, B: 90, fullMark: 150 },
    { ability: 'ほげ', A: 65, B: 85, fullMark: 150 },
  ]);
  const [limit, setLimit] = useState(5); // 新しいstate変数
  const [offer, setOffer] = useState<
    | {
        id: number;
        companyId: number;
        userId: string;
        title: string;
        salary: string;
        location: string;
        description: string;
        status: OfferStatus;
        createdAt: Date;
        updatedAt: Date;
      }[]
    | null
    | undefined
  >(); // 通知のデータ構造(後で変更)

  useEffect(() => {
    setdataOffer();
  }, []);

  const setdataOffer = async () => {
    // 通知のデータ（サーバーから取得すると仮定）
    const offer = await apiClient.offer.get();

    setOffer(offer.body);
    console.log(offer);
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
    <div>
      <BasicHeaderLogined user={user} />
      <div className={styles.topbar}>
        <div>
          <ProfilePercent percentage={35} />
          {/* 420*300の四角を横に２つ並べる */}
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <Deviation />
            <div
              style={{
                width: '420px',
                height: '300px',
                backgroundColor: 'gray',
                margin: '5px',
              }}
            />
          </div>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <div
              style={{
                width: '420px',
                height: '300px',
                backgroundColor: 'gray',
                margin: '5px',
              }}
            />
            <div
              style={{
                width: '420px',
                height: '300px',
                backgroundColor: 'gray',
                margin: '5px',
              }}
            />
          </div>

          <div className={styles.columndetail}>
            <Deviation />

            <Chart data={data} width={500} height={500} outerRadius={200} />

            <div />
          </div>
        </div>
        <div
          style={{
            marginLeft: '5px',
          }}
        >
          <div
            style={{
              backgroundColor: '#f1f1f1',
              height: 70,
              width: 500,
              textAlign: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              display: 'flex',
            }}
          >
            <span
              style={{
                fontSize: 22,
                fontWeight: 'bold',
                paddingTop: 20,
                paddingLeft: 20,
              }}
            >
              <p style={{ borderBottom: '2px solid #addeff', letterSpacing: '0' }}>
                招待が来ている企業
              </p>
            </span>
            <div style={{ textAlign: 'right' }}>
              <div style={{ padding: 8, letterSpacing: '0' }}>
                受け取った招待の数 <span style={{ fontSize: 22, fontWeight: 700 }}>10</span>
              </div>
              <div style={{ marginRight: 10 }}>新着順↑↓</div>
            </div>
          </div>
          <div
            style={{
              paddingLeft: '10px',
              paddingRight: '2px',
              backgroundColor: '#f1f1f1',
              overflowY: 'scroll',
              height: 790,
              width: 500,
            }}
            className={styles.scrollbar}
          >
            {offer?.slice(0, 10).map(
              (
                news,
                index // .sliceを追加
              ) => (
                <OfferList
                  key={index}
                  companyName={news.title}
                  description={news.description}
                  location={news.location}
                  salary={news.salary}
                  createat={news.createdAt}
                  width="480px"
                  height="120px"
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
