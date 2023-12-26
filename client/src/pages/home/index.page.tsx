/* eslint-disable max-lines */
import type { OfferStatus } from 'commonTypesWithClient/models';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { BasicHeaderLogined } from 'src/pages/@components/BasicHeaderLogined/BasicHeaderLogined';
import { apiClient } from 'src/utils/apiClient';
import { userAtom } from '../../atoms/user';
import Chart from '../@components/Chart';
import Deviation, { Popularjobs, RecommendedOccuoations } from '../@components/Deviation';
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
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    setdataOffer();
  }, []);

  const setdataOffer = async () => {
    // 通知のデータ（サーバーから取得すると仮定）
    const offer = await apiClient.offer.get();

    offer.body?.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();
    });
    setOffer(offer.body);
  };

  const handleShowMore = () => {
    setLimit((prevLimit) => prevLimit + 5);
  };

  const sortOffers = () => {
    const sortedOffers = [...(offer ?? [])];
    sortedOffers.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (sortOrder === 'asc') {
        console.log('ss');
        return dateA.getTime() - dateB.getTime(); // Ascending order
      } else {
        return dateB.getTime() - dateA.getTime(); // Descending order
      }
    });
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setOffer(sortedOffers); // 並び替えたオファーの配列をセット
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
            <Popularjobs />
          </div>
          <div style={{ flexDirection: 'row', display: 'flex' }}>
            <RecommendedOccuoations />
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
                受け取った招待の数{' '}
                <span style={{ fontSize: 22, fontWeight: 700 }}>{offer?.length}</span>
              </div>
              {sortOrder === 'asc' ? (
                <a style={{ marginRight: 10, fontWeight: 501 }} onClick={sortOffers}>
                  新着順↑
                </a>
              ) : (
                <a style={{ marginRight: 10, fontWeight: 501 }} onClick={sortOffers}>
                  新着順↓
                </a>
              )}
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
