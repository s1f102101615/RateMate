import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { userAtom } from '../../atoms/user';
import { BasicHeaderLogined } from '../@components/BasicHeaderLogined/BasicHeaderLogined';

const Home = () => {
  const [user] = useAtom(userAtom);
  const router = useRouter();

  return (
    <>
      <BasicHeaderLogined user={user} />
      <div style={{ paddingTop: 130 }}>通知ページ</div>
    </>
  );
};

export default Home;
