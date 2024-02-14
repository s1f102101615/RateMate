import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useFetchInfoDetail } from 'src/utils/fetchinfo';
import styles from './index.module.css';
const DetailPage = () => {
  const router = useRouter();
  const { id } = router.query; // URLからidを取得

  const fetchinfodetail = useFetchInfoDetail();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (id) {
      // id が存在する場合のみ FetchInfoDetail を実行
      FetchInfoDetail(Number(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // id が変更されるたびに効果を再実行

  const FetchInfoDetail = async (companyId: number) => {
    console.log(companyId);
    const fetchInfo = await fetchinfodetail(companyId);
    console.log(fetchInfo);
  };

  return (
    <div className={styles.milkyWay}>
      <div className={styles.background}>
        <div>
          <h1>詳細ページ: {id}</h1>
          {/* ここにその他のページコンテンツ */}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
